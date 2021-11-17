class EventEmit {
  constructor(){
    this.e = {}
  }
  emit(name){
    this.e[name] && this.e[name].forEach(cb=>{
      cb && typeof cb === 'function' && cb()
    })
  }
  on(name, callback){
    if(!this.e[name]){
      this.e[name] = []
    }
    this.e[name].push(callback)
  }
  off(name, callback){
    let cbIndex = this.e[name].findIndex(cb=>cb===callback || cb._===callback)
    this.e[name].splice(cbIndex, 1)
    if(!this.e[name].length){
      delete this.e[name]
    }
  }
  once(name, callback){
    let self = this
    function listener(){
      self.off(name, callback)
      callback.apply(self, arguments)
    }
    listener._ = callback
    this.on(name, listener)
  }
}