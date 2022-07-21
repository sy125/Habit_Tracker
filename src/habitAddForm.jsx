import React, {memo} from 'react';

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault(); //브라우져의 기본 리셋 기능 취소
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //this.inputRef.current.value=''; 입력후 검색창에 입력한 값 리셋하는 법
        formRef.current.reset();
    };

    return (
        <form ref ={formRef} className="add-from" onSubmit={onSubmit}>
            <input 
                ref={inputRef}
                type="text" 
                className='add-input' 
                placeholder='Habit'/>
            <button className="add-button">Add</button>
        </form>
    );
    });



export default HabitAddForm;

// class HabitAddForm extends PureComponent {
//     formRef = React.createRef();
//     inputRef = React.createRef();

//     onSubmit= event =>{
//         event.preventDefault(); //브라우져의 기본 리셋 기능 취소
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         //this.inputRef.current.value=''; 입력후 검색창에 입력한 값 리셋하는 법
//         this.formRef.current.reset();
//     };
//     render() {
//         return (
//             <form ref ={this.formRef} className="add-from" onSubmit={this.onSubmit}>
//                 <input 
//                     ref={this.inputRef}
//                     type="text" 
//                     className='add-input' 
//                     placeholder='Habit'/>
//                 <button className="add-button">Add</button>
//             </form>
//         );
//     }
// }

// export default HabitAddForm;