class Observer{
  
  constructor(){
    this.registeredObserver = [];
  }
  
  registerObserver(observer){
    this.registeredObserver.push(observer);
  }
  
  notifyObserver(...arg){
    this.registeredObserver.forEach(function(eachObservers){
      eachObservers.apply(null,arg);
    });
  }
  
}
