import cassandra from 'cassandra-driver'
import handlers from './handlers.js'

export default class EventTracker {
  constructor(element) {
    this.element = element
    if (element === null) {
      console.log("Cannot find element to track events.")
      return
    }
    this.cassandraClient = new cassandra.Client({
      contactPoints: ['127.0.0.1']
    })
    this.cassandraClient.connect(err => {
      if (err)
        return console.error(err);
      console.log('Connected to cluster with %d host(s): %j',
        this.cassandraClient.hosts.length,
        this.cassandraClient.hosts.keys());
    })
    for (let eventName in handlers) {
      element.addEventListener(eventName, handlers[eventName])
    }
  }
}
