import React, { Component } from 'react' ;
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    
    render() {
      return (
     
        <Map google={this.props.google} zoom={11} initialCenter={{lat:65.01236, lng:25.46816}}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Raksila'} position={{lat:65.010932, lng:25.493835}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Tuira'} position={{lat:65.025250, lng:25.475027}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Teatteri'} position={{lat:65.015219, lng:25.463287}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Kiiminki'} position={{lat:65.128938, lng:25.776797}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Airport Oulu'} position={{lat:64.929507, lng:25.373997}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Liminka'} position={{lat:64.809438, lng:25.413155}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Höyhtyä'} position={{lat:64.996062, lng:25.500473}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Kaukovainio'} position={{lat:64.992543, lng:25.517942}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charker Kaakkuri'} position={{lat:64.962092, lng:25.521186}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Kaakkuri CM'} position={{lat:64.956425, lng:25.527585}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Maikkula'} position={{lat:64.981900, lng:25.570480}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Hiukkavaara'} position={{lat:65.010162, lng:25.587235}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Kempele'} position={{lat:64.908404, lng:25.506644}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Muhos'} position={{lat:64.557439, lng:26.843955}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Vaala'} position={{lat:64.554341, lng:25.493835}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Utajärvi'} position={{lat:64.755976, lng:26.413577}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Kemi'} position={{lat:65.733449, lng:24.579496}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Kajaani'} position={{lat:64.219520, lng:27.737076}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Hintta'} position={{lat:65.025803, lng:25.524543}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger IdeaPark'} position={{lat:65.076181, lng:25.446771}}/>
          <Marker onClick={this.onMarkerClick} title={''} name={'Charger Yliopisto'} position={{lat:65.056932, lng:25.466041}}/>
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              
          </InfoWindow>
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyD4J8Y0fys9_uxVQjMdefhHtrqwUmq_zDs")
  })(MapContainer)