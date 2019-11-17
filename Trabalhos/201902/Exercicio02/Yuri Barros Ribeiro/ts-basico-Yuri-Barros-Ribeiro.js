const datas = []
const transactions = []

const toOperation = rawOperation => rawOperation.match(/[a-zA-Z](?=[0-9]\()/)[0]
const toTransactionId = rawOperation => rawOperation.match(/[0-9](?=\()/)[0]
const toDataId = rawOperation => rawOperation.match(/(?<=\()[a-zA-Z](?=\))/)[0]

function initializeDatas( rawOperations ) {
    rawOperations.forEach( rawOperation => {
        const dataId = toDataId(rawOperation)
        
        const dataInArray = datas.map( data => data.id ).indexOf( dataId )
        if ( dataInArray === -1 ) {
            datas.push( { id: dataId,  readTimestamp: 0, writeTimestamp: 0 } )
        }
    } )
}

function iniatilizeTransactions( rawOperations ) {
    rawOperations.forEach( rawOperation => {
        const transactionId = toTransactionId(rawOperation)
        
        const transactionInArray = transactions.map( transaction => transaction.id ).indexOf( transactionId )
        if ( transactionInArray === -1 ) {
            transactions.push( { id: transactionId,  timestamp: transactionId } )
        }
    } )
}

function getDataById( dataId ) {
    const index = datas.map( data => data.id ).indexOf( dataId )
    return datas[index]
}

function getTransactionById( transactionId ) {
    const index = transactions.map( transaction => transaction.id ).indexOf( transactionId )
    return transactions[index]
}

function BasicTS( rawOperation, Tx, data ) {
    const operation = toOperation( rawOperation )
    if ( operation === 'r' ) {
        if ( Tx.timestamp < data.writeTimestamp )
        {
            console.log(`ESCALONAMENTO INVÁLIDO EM ${rawOperation}`)
            return false
        }
        else {
            if ( data.readTimestamp < Tx.timestamp ) {
                data.readTimestamp = Tx.timestamp
            }
        }
    }
	else {
        if ( Tx.timestamp < data.readTimestamp || Tx.timestamp < data.writeTimestamp ) {
            console.log(`ESCALONAMENTO INVÁLIDO EM ${rawOperation}`)
            return false
        }
		else {
            data.writeTimestamp = Tx.timestamp
        }
    }
    
    return true
}

const argument = process.argv[2]
const string = argument
const rawOperations = string.match(/[a-zA-Z][0-9]\([a-zA-Z]\)/g)

initializeDatas( rawOperations )
iniatilizeTransactions( rawOperations )

const success = rawOperations.every( rawOperation => {
    const data = getDataById( toDataId(rawOperation) )
    const Tx = getTransactionById( toTransactionId( rawOperation) )

    return BasicTS( rawOperation, Tx, data )
} )

if ( success ) {
    console.log( 'ESCALONAMENTO VÁLIDO!' )
}

// EXEMPLOS
// válido = 'r1(a);w1(a);r2(a);w2(a)c1'
// inválido = 'r1(a);r2(a);w1(a);w2(a)c1'
// válido =  'r2(X);r1(Y);w1(Y);r2(Y);w1(Z);c1;w2(Y);r2(Z);w2(Z);c2'
// inválido = 'r2(X);r1(Y);r2(Y);w1(Z);c1;w2(Y);r2(Z);w1(Y);w2(Z);c2'

// Exemplo de execução via terminal:
// node ts-basico-Yuri-Barros-Ribeiro.js 'r2(X);r1(Y);w1(Y);r2(Y);w1(Z);c1;w2(Y);r2(Z);w2(Z);c2'