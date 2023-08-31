// import React from 'react'
// import './testimonials.css'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'


// import { Pagination} from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// const data = [
//   {
//     avatar: AVTR1,
//     name: 'Tina Snow',
//     review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis enim incidunt officiis aliquid assumenda vitae ipsa? Sequi accusamus nostrum eius ipsa incidunt corrupti provident esse maxime? Natus, illo culpa! Impedit aperiam magnam repellat totam'
//   },
//   {
//     avatar: AVTR2,
//     name: 'Shatta Whales',
//     review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis enim incidunt officiis aliquid assumenda vitae ipsa? Sequi accusamus nostrum eius ipsa incidunt corrupti provident esse maxime? Natus, illo culpa! Impedit aperiam magnam repellat totam'
//   },
//   {
//     avatar: AVTR3,
//     name: 'Nicolas Cage',
//     review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis enim incidunt officiis aliquid assumenda vitae ipsa? Sequi accusamus nostrum eius ipsa incidunt corrupti provident esse maxime? Natus, illo culpa Impedit aperiam magnam repellat totam'
//   },
//   {
//     avatar: AVTR4,
//     name: 'Elijah Rock',
//     review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis enim incidunt officiis aliquid assumenda vitae ipsa? Sequi accusamus nostrum eius ipsa incidunt corrupti provident esse maxime? Natus, illo culp Impedit aperiam magnam repellat totam'
//   },
// ]


// const Testimonials = () => {
//   return (
//     <section id='testimonials'>
//       <h5>Review from Clients</h5>
//       <h2>Testimonials</h2>
//       <Swiper className="container testimonials__container"
//        // install Swiper modules
//        modules={[Pagination]}
//        spaceBetween={40}
//        slidesPerView={1}
//        pagination={{ clickable: true }}
//        onSwiper={(swiper) => console.log(swiper)}
//        onSlideChange={() => console.log('slide change')}
//      >
//       {
//         data.map(({avatar, name, review}, index) => {
//           return(
//             <SwiperSlide key={index} className="testimonial">
//             <div className="client__avatar">
//               <img src={avatar}/>
//             </div>
//             <h5 className='client__name'>{name}</h5>
//               <small className="client__review">{review}</small>
//           </SwiperSlide>
//           )
//         })
//       }   
//       </Swiper>
//     </section>
//   )
// }

// export default Testimonials