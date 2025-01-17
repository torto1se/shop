import React from 'react'

export default function Questions() {
  return (
    <div className='faq'>
        <div style={{textAlign: 'center', fontSize:'35px', margin: '20px'}}>
            FAQ
        </div>
        <div className='faq-block'>
            <div className='question-block'>
                <span className='question'>Как быстро я получу свой товар?</span>
                <span className='answer'>Максимальное время выдачи товара — 12 часов. Большинство товаров выдается на ваш аккаунт моментально, однако после покупки услуг и гифтов Вам нужно будет связаться с продавцом и сообщить ему уникальный код для получения товара.</span>
            </div>
            <div className='question-block'>
                <span className='question'>Что делать, если у меня возникли проблемы с товаром?</span>
                <span className='answer'>Не беспокойтесь. Первым делом Вам нужно связаться с продавцом и сообщить ему о проблеме — продавец обязан оказывать Вам поддержку в течение всего гарантийного срока. Если продавец не решил Вашу проблему, Вы должны обратиться в техническую поддержку на сайте или через почту test@gmail.com</span>
            </div>
            <div className='question-block'>
                <span className='question'>Почему на купленном аккаунте другие игроки?</span>
                <span className='answer'>Скорее всего Вы купили оффлайн аккаунт — это общий аккаунт, доступ к которому предоставляется в автономном режиме. В нем ограничены сетевые функции, однако он подходит для прохождения сюжетной кампании. Если в приобретенном аккаунте включен семейный доступ или находятся другие пользователи, не беспокойтесь — эти факторы не повлияют на вашу игру.</span>
            </div>
            <div className='question-block'>
                <span className='question'>В каких случаях я могу вернуть товар?</span>
                <span className='answer'>Возврат возможен:<br></br>
1. товар оказался нерабочим и продавец не выдает замену;<br></br>
2. товар не соответствует описанию.</span>
            </div>
        </div>
    </div>
  )
}
