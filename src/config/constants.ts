export default {
	messageBroker: {
		rabbitmq: {
			queues: {
				transaction_queue: 'transaction_queue'
			},
			exchangeType: 'direct',
			exchangeName: 'transaction.exchange',
			bindings: {
				transaction_queue: 'transaction_queue'
			}
		},
		description: 'MESSAGE_BROKER'
	},
	env: {
		cloud_amqp_url: process.env.CLOUD_AMQP_URL
	}
};