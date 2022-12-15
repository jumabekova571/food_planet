import React from 'react'
import Card from '../Card/Card'
import SectionNavigation from '../SectionNavigation/SectionNavigation'
import pizza1 from '../../assets/img/pizza/pizza-1.png'
import pizza2 from '../../assets/img/pizza/pizza-2.png'
import pizza3 from '../../assets/img/pizza/pizza-3.png'
import pizza4 from '../../assets/img/pizza/pizza-4.png'
import pizza5 from '../../assets/img/pizza/pizza-5.png'
import pizza6 from '../../assets/img/pizza/pizza-6.png'
import pizza7 from '../../assets/img/pizza/pizza-7.png'
import pizza8 from '../../assets/img/pizza/pizza-8.png'
import Button from '../Button/Button'

const items = [
  {
    id: '1',
    title: 'Мексиканская',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
    салат айсберг,
    соус чесночный, соус гриль,
    кетчуп, майонез`,
    image: pizza1,
    price: 200,
  }, {
    id: '2',
    title: 'Мексиканская',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
салат айсберг,
соус чесночный, соус гриль,
кетчуп, майонез`,
    image: pizza2,
    price: 200,
  }, {
    id: '3',
    title: 'Мексиканская',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
салат айсберг,
соус чесночный, соус гриль,
кетчуп, майонез`,
    image: pizza3,
    price: 200,
  }, {
    id: '4',
    title: 'Мексиканская',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
салат айсберг,
соус чесночный, соус гриль,
кетчуп, майонез`,
    image: pizza4,
    price: 200,
  }, {
    id: '5',
    title: 'Мексиканская',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
салат айсберг,
соус чесночный, соус гриль,
кетчуп, майонез`,
    image: pizza5,
    price: 200,
  }, {
    id: '6',
    title: 'Мексиканская',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
салат айсберг,
соус чесночный, соус гриль,
кетчуп, майонез`,
    image: pizza6,
    price: 200,
  }, {
    id: '7',
    title: 'Мексиканская',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
салат айсберг,
соус чесночный, соус гриль,
кетчуп, майонез`,
    image: pizza7,
    price: 200,
  }, {
    id: '8',
    title: 'Мексиканская',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
салат айсберг,
соус чесночный, соус гриль,
кетчуп, майонез`,
    image: pizza8,
    price: 200,
  },
]


const ProductsSection = () => {
  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 style={{ fontSize: '25px', fontWeight: 900, color: 'var(--color-secondary)' }}>Меню</h2>
        <SectionNavigation />
      </div>

      <div className='d-flex justify-content-end gap-3 align-items-center mt-4'>
        <span>Сортировать по: </span>
        <select className='px-3 py-2' defaultValue={3}>
          <option value={1}>По цене (сначало дешевле)</option>
          <option value={2}>По цене (сначало дороже)</option>
          <option value={3}>По дате создания</option>
        </select>
      </div>

      <div className='row'>
        {items.map(item => (
          <div
            key={item.id}
            className='col-3'
          >
            <Card
              imageUrl={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>
      <Button
        className={"mt-4 mx-auto d-block"}
        type="outlined"
      >
        Показать ещё
      </Button>
    </div>
  )
}

export default ProductsSection