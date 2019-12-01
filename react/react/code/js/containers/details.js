import React from 'react';
import {connect} from 'react-redux';

const Details = (props) => {

    if (!props.car) {
        return (<p>Choose car!</p>)
    }
    return (
      <div>
          <h2>{props.car.car}</h2>
          <img src={props.car.img} alt={'asd'}/>
          <p>{props.car.desc}</p>
          <p>Speed: {props.car.speed}, weight: {props.car.weight}</p>
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
        car: state.active
    };
};

export default connect (mapStateToProps)(Details);