import React from "react";
import style from "./CreateBooks.module.css"
import Input from  "../forms/input"
import Select from "../forms/Select";
import Button from "../Button";
import Button2 from "../forms/Button";
import { useState,useEffect } from "react";

const CreateBooks = () =>{

    //recupera os dados de categoria da apirest
    useEffect(()=>{
        fetch("https://localhost:5000/listagemCategorias",{
            method:'GET',
            headers:{
            'Content-Type':'application/json',
            'Acess-Control-Allow-Origin':'+',
            'Acess-Control-Allow-Headers':'+',
            }
        }).then(
            (resp)=>
                // console.log('RESPOSTA:'+ resp)
                resp.json()
            
        ).then(
            (data)=>
            console.log('DATA:' +data)
        
    ).catch(
            (error)=>{
                console.log(error)
            }
        )


    },[]);
    return(
        <section className={style.create_book_container}>
            <h1>CADASTRO DE LIVROS</h1>
            <Input 
                type='text'
                name='txt_livros'
                placeHolder='Digite o nome do seu livro aqui'
                text='Titulo do livros'
            />
            <Input 
                type='text'
                name='txt_descricao_livros'
                placeHolder='Digite o nome do autor'
                text='Nome de autor'
            />

            <Input 
                type='text'
                name='txt_descricao_livros'
                placeHolder='Digite a descrição do livro'
                text='Descrição do livros'
            />

            <Select

                name='Categoria'
                text='Escolha uma categoria'

            />
            <Button2 
                rotulo='Cadastrar Livro'
            />







        </section>



    )




}

export default CreateBooks