import React from 'react';
import { RoomContext } from '../Context';
import Loading from './Loading';

export default class FeaturedRoom extends React.Component{

  static contextType = RoomContext;
  render(){
    const {featuredRooms} = this.context;
    console.log(featuredRooms);
    
    return (
      <div>
        Featured
        <Loading />
      </div>
    )
  }
}