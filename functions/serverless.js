import serverless from 'serverless-http'
import expressApp from './app'

// We need to define our function name for express routes to set the correct base path
const functionName = 'serverless'

// Initialize express app
const app = expressApp(functionName)

// Export lambda handler
exports.handler = serverless(app)
