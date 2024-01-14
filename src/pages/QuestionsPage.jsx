import React, { useState } from "react";
import './../styles/questionsPage.css'
import Footer from "../components/Footer";

const QuestionsPage = () => {
    return ( 
        <>
        <div className="question-container">
            <div className="accordion" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Какие медицинские услуги предлагает ваша поликлиника?
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Мы предлагаем широкий спектр медицинских услуг, включая общую практику, специализированные консультации, лабораторную диагностику, инструментальные исследования, физиотерапию и реабилитацию. У нас также есть услуги профилактики и медицинского обследования.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Какие специалисты работают в вашей поликлинике?
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">В нашей поликлинике работают опытные специалисты различных областей медицины, включая терапевтов, педиатров, гинекологов, кардиологов, ортопедов и других специалистов. Мы также сотрудничаем с врачами-специалистами из других медицинских учреждений, если требуется консультация или направление на более узкого специалиста.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Какие дополнительные услуги или программы вы предлагаете?
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Мы предлагаем различные дополнительные услуги и программы, такие как программы профилактики, медицинские курсы, консультации по питанию и здоровому образу жизни, программы реабилитации и физического восстановления, а также психологическую поддержку. Пожалуйста, свяжитесь с нами, чтобы узнать больше о доступных услугах и программах.</div>
                    </div>
                </div>

            </div>
        </div>

        <Footer/>
        </>
     );
}
 
export default QuestionsPage;