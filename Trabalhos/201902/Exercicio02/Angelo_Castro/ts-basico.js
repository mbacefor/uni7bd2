const datas = []
const transactions = []

const toOperation = rawOperation => rawOperation[0]
const toTransactionId = rawOperation => rawOperation[1]
const toDataId = rawOperation => rawOperation[3]

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
