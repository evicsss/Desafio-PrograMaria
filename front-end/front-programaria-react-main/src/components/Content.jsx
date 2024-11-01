import { useState, useEffect } from 'react'
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
      />

    <section className={styles.informationSection}>
      <h1 className={styles.informationTitle}>Cadastre seus filmes preferidos e encontre novas inspirações!</h1>
      <p className={styles.informationText}>
      Maria Movie é o lugar perfeito para quem quer compartilhar e descobrir filmes que fazem a diferença na vida de quem ama tecnologia. Neste espaço, cada usuário tem a liberdade de cadastrar seus filmes preferidos, contribuindo para uma rede de recomendações que cresce a cada dia. Junte-se a essa comunidade vibrante e ajude a inspirar outros desenvolvedores e amantes da tecnologia a explorar novas histórias e perspectivas. Cadastre seu filme favorito e faça parte de uma experiência cinematográfica única, onde cada indicação é uma nova inspiração!
      </p>
    </section>
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
        <h2 className={styles.projectsTitle}>Contribua com um filme:</h2>
        <form  className={styles.form} onSubmit={handleCreateMessage}>
          <input 
            onChange={handleInputValueNome} 
            placeholder="Digite o nome do filme"
            value={nome}
            className={styles.formInput}
          />
          <textarea 
            onChange={handleInputValueImagem} 
            placeholder="Digite o endereço da imagem"
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
            placeholder="Digite o diretor"
            value={autor}
            className={styles.formTextArea}
          />
           <textarea 
            onChange={handleInputValueAno} 
            placeholder="Digite o ano do lançamento"
            value={ano}
            className={styles.formTextArea}
          />
          <button className={styles.formButton} type="submit">Cadastrar Filme</button>  
          {success && <p>Cadastrado com sucesso! Obrigado por sua contribuição!</p>}
        </form>
      </div>
      <Footer />
    </>
  )
}
