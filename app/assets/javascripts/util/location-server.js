let Stapes = require('stapes');
let _ = require('lodash');


let Model = Stapes.subclass({
  /**
   * @events:
   *   'success':{
   *             latitude: @latitude {double},
   *             longitude: @longitude {double},
   *             altitude: @altitude {double},
   *             accuracy: @accuracy {double}
   *             },
   *   'error': {
   *            code: @errorCode {short},
   *            message: @errorMessages {?}
   *            }
   * */
  constructor: function () {
    this.geoOptions = {
      enableHighAccuracy: true,
      maximumAge : 30000,
      timeout : 27000
    };
    Stapes.mixinEvents(this);
    _.bindAll(this);
  },

  /**
   * @priave
   * */
  onSuccess: function(position) {
    this.emit('success', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      altitude: position.coords.altitude,
      accuracy: position.coords.accuracy
    });
  },

  /**
   * @priave
   * */
  onFaliure: function(error) {
    this.emit('error', {
      code: error.code,
      message: error.message
    });
  },

  /**
   * @public
   * @param Object; like {enableHighAccuracy: true, maximumAge : 30000,timeout : 27000}
   * */
  setGeoOptions: function(geoOptions) {
    this.geoOptions = _.merge(this.geoOptions, geoOptions || {});
  },

  /**
   * @public
   * @param Object; like {enableHighAccuracy: true, maximumAge : 30000,timeout : 27000}
   * */
  fetchLocation: function(geoOptions) {
    this.setGeoOptions(geoOptions);
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.onSuccess, this.onFaliure, this.geoOptions);
    }else{
      alert("Geolocation services are not supported by your web browser.");
    }
  }
});
module.exports = Model;
