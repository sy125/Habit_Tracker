import React, { Component } from 'react'
import HabitAddForm from '../habitAddForm';
import Habit from './habit';

class Habits extends Component {
   //아무런 기능이 없는 그저 props에 전달된 습관들의 배열을 빙글빙글 돌면서 habit이라는 component로 변경해서 전달

    handleIncrement = habit =>{
       this.props.onIncrement(habit);
    };
    handleDecrement = habit =>{
        this.props.onDecrement(habit);
    };
    handleDelete = habit =>{
        this.props.onDelete(habit);
    };
    handleAdd = name =>{
        this.props.onAdd(name);
    };

  render() {
    return (
    <>
    <HabitAddForm onAdd={this.handleAdd}/>
    <ul>
        {this.props.habits.map(habit =>(
                <Habit 
                key={habit.id} 
                habit={habit} 
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                //onDelete={(habit)=>{this.props.handleDelete(habit)}}로 바로정의가능
                 />
        ))}
    </ul>
    <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
    </>
    );
  }
}

export default Habits;
