import {RecentEvents,RecentExperiences,RecentArticles} from '../Test/TestArticle'
import ArticlePreview from '../Models/ArticlePreview';
import BannerImage from '../Media/ccd_banner.jpg';
import React, { Component } from 'react';
import "../Styles/HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className='home'>
        <div className='tite-container' style={{ backgroundImage: `url(${BannerImage})` }}>
          Laboratorio Web
        </div>
        <div className='header-container' style={{ backgroundImage: `url(${BannerImage})` }}>
          El laboratorio web es un espacio multidisciplinario que participa en proyectos de índole cultural y artístico
        </div>
        <div className='recent-articles'>
          <h2 className='article-category'>
            Actividades</h2>
          <div className='article-preview'>
            {RecentEvents.map((article, key) => {
              return (
                <ArticlePreview key={key}
                  title={article.title}
                  image={article.image}
                  description={article.description} />);
            })}
          </div>
          <h2 className='article-category'>
            Articulos</h2>
          <div className='article-preview'>
            {RecentArticles.map((article, key) => {
              return (
                <ArticlePreview key={key}
                  title={article.title}
                  image={article.image}
                  description={article.description} />);
            })}
          </div>
          <h2 className='article-category'>
            Experimenta</h2>
          <div className='article-preview'>
            {RecentExperiences.map((article, key) => {
              return (
                <ArticlePreview key={key}
                  title={article.title}
                  image={article.image}
                  description={article.description} />);
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage