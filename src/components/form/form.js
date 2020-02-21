import React from "react";

const Form = props => {
    const {nombre, apellido, carnet, submitHandler, changeHandler} = props;
    return(

        <Form onSubmit={submitHandler} className={container}>
            <input
             id="nombre"
             onChange={changeHandler}
             value={nombre}
             placeholder="Ingrese nombre"  
            />
            
            <input
             id="apellido"
             onChange={changeHandler}
             value={apellido}
             placeholder="Ingrese apellido"  
            />

            <input
             id="carnet"
             onChange={changeHandler}
             value={carnet}
             placeholder="Ingrese su numero de carnet"  
            />

        </Form>
    );
};

export default Form;

