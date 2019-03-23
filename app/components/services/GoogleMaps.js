import React from 'react';

class Map extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -13.7033101, lng: -69.6797954 },
            zoom: 1
        })

        if (this.props.location.value && this.props.radius.value) {
            var radius = this.props.radius.value
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': this.props.location.value }, function (results, status) {
                if (status === 'OK') {
                    map.setCenter(results[0].geometry.location)
                    map.setZoom(10)
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                    var cityCircle = new google.maps.Circle({
                        strokeColor: '#e64a67',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: '#e64a67',
                        fillOpacity: 0.35,
                        map: map,
                        center: results[0].geometry.location,
                        radius: radius * 1000
                    });
                } else {
                    swal('', 'Geocode was not successful for the following reason: ' + status);
                }
            })
        }
    }

    render() {

        return (
            <div style={{ height: '300px' }} id="map"></div>
        );
    }
}

export default Map;