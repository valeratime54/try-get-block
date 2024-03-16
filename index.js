const Web3 = require('web3');

class Web3Tools {
    /**
     * Initializes the Web3Tools instance with the specified provider URL and timeout.
     * @param {string} providerUrl - The URL of the Ethereum node provider.
     * @param {number} [timeout=10000] - Timeout value for requests to the provider (in milliseconds).
     */
    constructor(providerUrl, timeout = 10000) {
        // Create a new Web3 instance with the provided provider URL and timeout
        this._web3 = new Web3(providerUrl, { timeout });
    }

    /**
     * Fetches the transaction receipt by transaction hash.
     * @param {string} txHash - The hash of the transaction.
     * @returns {Promise<Object|null>} - A promise that resolves with the transaction receipt object or null if not found.
     */
    async fetchTransactionReceipt(txHash) {
        return this._web3.eth.getTransactionReceipt(txHash);
    }

    /**
     * Fetches block details by block number.
     * @param {number|string} blockNumber - The number or hash of the block.
     * @returns {Promise<Object|null>} - A promise that resolves with the block object or null if not found.
     */
    async fetchBlockDetails(blockNumber) {
        return this._web3.eth.getBlock(blockNumber);
    }

    /**
     * Estimates gas usage for a transaction object.
     * @param {Object} txObject - The transaction object.
     * @returns {Promise<number>} - A promise that resolves with the estimated gas value.
     */
    async estimateGasUsage(txObject) {
        return this._web3.eth.estimateGas(txObject);
    }

    /**
     * Fetches the current gas price.
     * @returns {Promise<string>} - A promise that resolves with the current gas price in wei.
     */
    async fetchGasPrice() {
        return this._web3.eth.getGasPrice();
    }

    // Other methods remain the same...

    /**
     * Retrieves past logs that match the specified filter options.
     * @param {Object} filterOptions - The filter options.
     * @returns {Promise<Array<Object>>} - A promise that resolves with an array of log objects.
     */
    async getPastLogs(filterOptions) {
        return this._web3.eth.getPastLogs(filterOptions);
    }
}

module.exports = Web3Tools;
