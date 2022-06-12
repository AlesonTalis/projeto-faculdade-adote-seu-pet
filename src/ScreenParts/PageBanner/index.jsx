
import React,
{
    useState,
    useEffect
} from 'react'

const banner_texts = [
    {
        titulo: 'Adote uma vida Adote um carinho',
        descricao: 'São mais de 30 milhões de animais abandonados ao redor do mundo. Ajudamos pessoas a encontrar um lar para seu animalzinho.',
        link: '#',
        link_text: 'Quero adotar',
        imagem: './public/images/beautiful-pet-portrait-of-small-dog-and-cat.jpg'
    },
    {
        titulo: 'Adote uma vida Adote um carinho',
        descricao: 'São mais de 30 milhões de animais abandonados ao redor do mundo. Ajudamos pessoas a encontrar um lar para seu animalzinho.',
        link: '#',
        link_text: 'Quero adotar',
        imagem: './public/images/lovely-pet-portrait-isolated.jpg'
    },
]

function PageBanner() {
    const [banner_text, setBannerText] = useState(banner_texts[0])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const index = banner_texts.indexOf(banner_text)
    //         const next_index = index + 1
    //         const next_banner_text = banner_texts[next_index]
        
    //         if (next_banner_text) {
    //             setBannerText(next_banner_text)
    //         } else {
    //             setBannerText(banner_texts[0])
    //         }
    //     }, 5000)

    //     return () => clearInterval(interval)
    // }, [banner_text])

  return (
    <div className="Banner">
        <div className="Banner-content">
            <img src={banner_text.imagem} alt=""/>
            <div className="Banner-content-item-text">
                <div>
                    <h1>{banner_text.titulo}</h1>
                    <p>{banner_text.descricao}</p>
                    <a href={banner_text.link} className="btn btn-primary">{banner_text.link_text}</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageBanner