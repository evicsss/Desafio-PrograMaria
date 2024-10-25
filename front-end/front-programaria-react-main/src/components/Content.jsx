import { useState, useEffect } from 'react'
import listaImg from '../assets/lista.svg'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'

import Axios from 'axios'

import styles from '../styles/content.module.css'

export function Content() {
  const [repositories, setRepositories] = useState([])
  const [nome, setNome] = useState('')
  const [autor, setAutor] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [imagem, setImagem] = useState('')
  const [ano, setAno] = useState('')
  const [success, setSuccess] = useState(false)
  const baseURL = 'https://desafio-programaria.onrender.com/filme'

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(baseURL)
      setRepositories(response.data)
    }
    getData()
  }, [])

  function handleInputValueNome(event) {
    setNome(event.target.value)
  }

  function handleInputValueAutor(event) {
    setAutor(event.target.value)
  }

  function handleInputValueImagem(event) {
    setImagem(event.target.value)
  }

  function handleInputValueSinopse(event) {
    setSinopse(event.target.value)
  }

  function handleInputValueAno(event) {
    setAno(event.target.value)
  }

  function handleCreateMessage(event) {
    event.preventDefault()

    console.log('mensagem enviada', nome, imagem, autor, sinopse, ano)

    async function sendData() {
      await Axios.post(baseURL, {
        nome: nome,
        autor: autor,
        sinopse: sinopse,
        imagem: imagem,
        ano: ano
      })
      const response = await Axios.get(baseURL)
      setRepositories(response.data)
    }
    sendData()

    setSuccess(true)
    setNome('')
    setAutor('')
    setImagem('')
    setSinopse('')
    setAno('')
  }

  return (
    <>
      <Header
        title='FlixProgramaria'
        subtitle='Os melhores filmes brasileiros'
        image={listaImg}
      />
      <div className={styles.projectsContainer}>
        <div className={styles.projectsContainer}>
          <div className={styles.cardsRepoContainer}>
            {repositories.map((repo) => {
              return(
                <div key={repo._id} className={styles.cardRepo}>
                <div className={styles.cardImgContainer}>
                  <img className={styles.cardRepoImage} src={repo.imagem} />
                </div>
                <details>
                  <summary className={styles.cardRepoSummary}>
                    {repo.nome}
                  </summary>
                  <p className={styles.cardRepoText}>{repo.sinopse}</p>
                  <q className={styles.cardRepoQuote}>{repo.autor}</q>
                  <q className={styles.cardRepoQuote}>{repo.ano}</q>
                </details>
              </div>
              )
            })}
          </div>
        </div>
      </div>
      <div >
        <h2 className={styles.projectsTitle}>Cadastre um filme:</h2>
        <form  className={styles.form} onSubmit={handleCreateMessage}>
          <input 
            onChange={handleInputValueNome} 
            placeholder="Digite o nome"
            value={nome}
            className={styles.formInput}
          />
          <textarea 
            onChange={handleInputValueImagem} 
            placeholder="Digite o link da imagem"
            value={imagem}
            className={styles.formTextArea}
          />
          <textarea 
            onChange={handleInputValueSinopse} 
            placeholder="Digite a sinopse"
            value={sinopse}
            className={styles.formTextArea}
          />
          <textarea 
            onChange={handleInputValueAutor} 
            placeholder="Digite o autor"
            value={autor}
            className={styles.formTextArea}
          />
           <textarea 
            onChange={handleInputValueAno} 
            placeholder="Digite o ano"
            value={ano}
            className={styles.formTextArea}
          />
          <button className={styles.formButton} type="submit">Enviar mensagem</button>
          {success && <p>Parabéns! Cadastro realizado com sucesso! </p>}
        </form>
      </div>
      <Footer />
    </>
  )
}
