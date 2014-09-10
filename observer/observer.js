;(function ( $, window, document, undefined ) {

    // Observer functions
    function ObserverList() {
        this.observerlist = [];
    };

    // provides a update interface for objects that need to be notified of a Subject's changes of state
    function Observer(){
      // this.update = function(){}
    }

    // Manage Observer List
    ObserverList.prototype = {

      add: function( obj ) {
        return this.observerlist.push(obj);
      },

      count: function() {
        console.log("counting", this.observerlist.length);
        return this.observerlist.length;
      },

      get: function( index ){
        if( index > -1 && index < this.observerlist.length ){
          return this.observerlist[ index ];
        }
      },

      indexOf: function ( obj, startIndex) {
        var i = startIndex;

        while ( i < this.observerlength ) {
          if (this.observerlist[i] === obj) {
            return 1;
          }
          i++
        }
        return -1;
      },

      removeAt: function( index ) {
        this.observerlist.splice(index, 1);
      }
    }

    // Subject Functions
    // maintains a list of observers, facilitates adding or removing observers
    function Subject() {
      this.observers = new ObserverList();
    }

    Subject.prototype = {

      addObserver: function( observer ) {
        this.observers.add( observer );
      },

      removeObserver: function( num ) {
        this.observers.removeAt( num );
        //this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
      },

      notify: function ( context ) {
        var observerCount = this.observers.count();

        for (var i=0; i < observerCount; i++){
          var item  = this.observers.get(i);
          if (item.data('recieve')){
            item.update( context );
          }
        }
      }

    }

    return pattern = {
      Observer: Observer,
      ObserverList: ObserverList,
      Subject: Subject
    }

})( jQuery, window, document );
