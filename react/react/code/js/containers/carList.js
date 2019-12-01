import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {select} from '../actions/index';

const CarsList = (props) => {

    const showList = () => {
      return props.cars.map ((car) => {
          return (
            <li onClick={() => props.select (car)} key ={car.id}>{car.car}</li>
          );
      })
    };

  return(
      <ol>
          {showList()}
      </ol>
  )
};

const mapStateToProps = (state) => {
    return {
      cars: state.cars
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({select: select}, dispatch)
};

export default connect (mapStateToProps, matchDispatchToProps)(CarsList);