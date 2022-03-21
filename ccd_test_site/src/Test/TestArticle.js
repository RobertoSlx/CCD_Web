import event1 from '../Media/Event1.png';
import event2 from '../Media/Event2.jpg';
import exp1 from '../Media/Exp1.jpg';
import exp2 from '../Media/Exp2.jpg';
import article1 from '../Media/Article1.jpg';
import article2 from '../Media/Article2.jpg';

// Articulos demo para la prueba del sitio suponiendo seran almacenados en una DB
// el identificador de tipo puede ser redundante pero sidentificara la naturaleza del documento

export const RecentEvents = [
    {
        id: 1,
        tipo: "E",
        title: "Evento del CCD 1",
        image: event1,
        description: "Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper.",
        body: <div className='article-text'>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
            <h3>Lorem Ipsum</h3>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
        </div>
    },
    {
        id: 2,
        tipo: "E",
        title: "Evento del CCD 2",
        image: event2,
        description: "Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper.",
        body: <div className='article-text'>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
            <h3>Lorem Ipsum</h3>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
        </div>
    }];
    
export const RecentExperiences = [
    {
        id: 3,
        tipo: "M",
        title: "Experimento del CCD 1",
        image: exp1,
        description: "Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper.",
        body: <div className='article-text'>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
            <h3>Lorem Ipsum</h3>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
        </div>
    },
    {
        id: 4,
        tipo: "M",
        title: "Experimento del CCD 2",
        image: exp2,
        description: "Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper.",
        body: <div className='article-text'>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
            <h3>Lorem Ipsum</h3>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
        </div>
    }];
    export const RecentArticles = [
    {
        id:5,
        tipo: "A",
        title: "Articulo del CCD 1",
        image: article1,
        description: "Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper.",
        body: <div className='article-text'>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
            <h3>Lorem Ipsum</h3>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
        </div>
    },
    {
        id:6,
        tipo: "A",
        title: "Articulo del CCD 2",
        image: article2,
        description: "Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper.",
        body: <div className='article-text'>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
            <h3>Lorem Ipsum</h3>
            <p>Praesent id augue vehicula, lacinia nulla ac, tincidunt nisi. Cras laoreet sit amet lacus ut ullamcorper. Sed pretium non leo in ullamcorper. Ut vel facilisis dui, eu egestas felis. Nam dignissim, nunc nec condimentum sodales, urna massa interdum ex, rhoncus pulvinar felis odio non eros. Proin sed neque accumsan, aliquet sapien sed, accumsan risus. Aliquam diam tellus, fringilla sit amet ante nec, tempus porta nulla. Nullam non mattis ipsum. Vivamus aliquam vehicula odio, vitae imperdiet neque. Nullam nec nunc at lectus scelerisque lacinia.</p>
        </div>
    }
]