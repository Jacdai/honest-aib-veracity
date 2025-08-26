// Minimal AIB Veracity Logger (MVP)
(function(){
  window.__AIB_EVENTS__ = window.__AIB_EVENTS__ || [];
  window.logEvent = function(ev){
    const line = Object.assign({
      app: ev.app || 'Unknown',
      case: ev.case || 'DEFAULT',
      who: ev.who || 'anon',
      type: ev.type || 'note',
      text: ev.text || '',
      status: ev.status || 'pending',
      sources: ev.sources || [],
      ts: new Date().toISOString()
    }, ev.extra || {});
    window.__AIB_EVENTS__.push(line);
  };
  window.downloadEvents = function(){
    const lines = (window.__AIB_EVENTS__||[]).map(o=>JSON.stringify(o)).join('\n')+'\n';
    const blob = new Blob([lines], {type:'application/x-ndjson'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'events.jsonl'; a.click();
    URL.revokeObjectURL(a.href);
  };
})();
