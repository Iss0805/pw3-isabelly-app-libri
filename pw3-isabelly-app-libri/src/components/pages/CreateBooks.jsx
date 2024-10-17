<<<<<<< HEAD
/* IMPORTAÇÃO DA STATE */
import { useState, useEffect } from 'react'

import style from './Createbooks.module.css'
import Input from '../forms/input'
import Select from '../forms/Select'
import Button from '../forms/Button'
=======
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
>>>>>>> 9b229c338bef362146ecfa0fb07eb5796401fc39

const Createbooks = () => {

        /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
        const [book, setBook] = useState({})

        /* STATE DE DADOS DAS CATEGORIAS VINDAS DO ARQUIVO db.json */
        const [categories, setCategories] = useState([]);

        /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
        function handlerChangeBook(event) {
                setBook({...book, [event.target.name] : event.target.value});
                console.log(book)
        }

        /* CAPTURA OS DADOS DA SELECT */
        function handleChangeCategory(event) {
                setBook({...book, cod_categoria: event.target.value});
                console.log(book);
        }

        /* RECUPERA OS DADOS DE CATEGORIA DO BANCO DADOS */
        useEffect(()=>{
                fetch('http://localhost:5000/listagemCateorias', {
                        method:'GET',
                        headers:{
                                'Content-Type':'application/json',
                                'Access-Control-Allow-Origin':'*',
                                'Access-Control-Allow-Headers':'*'
                        },
                }).then(
                        (resp)=>
                                resp.json()
                ).then(
                        (data)=>{
                        setCategories(data.data);
                        // console.log('TESTE-DATA:' + data.data);
                        }
                ).catch(
                        (error)=>{
                        console.log(error);
                        }
                )
        }, [])

        /* INSERÇÃO DOS DADOS DE LIVRO */
        function createBook(book) {
        
                console.log(JSON.stringify(book))
        
                fetch('http://localhost:5000/inserirLivro', {
                        method:'POST',
                        mode:'cors',
                        headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Headers':'*'
                        },
                        body: JSON.stringify(book)
                })
                .then(
                        (resp)=>resp.json()
                )
                .then(
                        (data)=>{
                        console.log(data);
                        // navigate('/livros',{state:'LIVRO CADASTRADO COM SUCESSO!'});
                        }
                )
                .catch(
                        (err)=>{ console.log(err) }
                )
        }

        /* FUNÇÃO DE SUBMIT */
        function submit(event) {
                event.preventDefault();
                createBook(book);
        }

        return (
                <section className={style.create_book_container}>
                        
                        <h1>CADASTRO DE LIVROS</h1>

                        <form onSubmit={submit}>

                                <Input 
                                        type='text'
                                        name='nome_livro'
                                        id='nome_livro'
                                        placeholder='Digite o título do livro'
                                        text='Digite o título do livro'
                                        handlerOnchange={handlerChangeBook}/>

                                <Input 
                                        type='text'
                                        name='autor_livro'
                                        id='autor_livro'
                                        placeholder='Digite o nome do autor'
                                        text='Digite o nome do autor'
                                        handlerOnchange={handlerChangeBook}/>

                                <Input 
                                        type='text'
                                        name='descricao_livro'
                                        id='descricao_livro'
                                        placeholder='Digite uma descrição para  livro'
                                        text='Descrição'
                                        handlerOnchange={handlerChangeBook}/>
                                
                                <Select 
                                        name="categoria_id"
                                        text="Selecione a categoria do livro"
                                        options={categories}
                                        handlerOnChange={handleChangeCategory}/>

                                <Button 
                                rotulo='Cadastrar livro'/>

                        </form>

                </section>
        )
        }

export default Createbooks
