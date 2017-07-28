import EventSourceServer from 'eventsource';

function createSource(url) {
  let ES;
  if(!window['EventSource']) {
    ES = EventSourceServer;
  } else {
    ES = EventSource;
  }

  const source = new ES(url);
  let deferred;

  source.onmessage = event => {
    if(deferred) {
      deferred.resolve(JSON.parse(event.data))
      deferred = null;
    }
  }

  return {
    nextMessage() {
      if(!deferred) {
        deferred = {}
        deferred.promise =
          new Promise(resolve => deferred.resolve = resolve)
      }
      return deferred.promise
    }
  }
}


export default createSource;