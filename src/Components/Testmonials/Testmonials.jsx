import React, { useRef } from 'react'
import './Testmonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testmonials(){
  const slider = useRef();
  let tx = 0;
 const slideForward = () => {
  if (tx > -50) {
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
};

const slideBackward = () => {
  if (tx < 0) {
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
};

  return (
    <div className='testmonials' id='testimonials'>
      <img src={ next_icon} alt="" className="next_btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back_btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Helen john</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam, voluptatem inventore repudiandae explicabo delectus dicta facilis debitis reprehenderit a, esse incidunt ab sequi ipsum temporibus eos asperiores? Quo, possimus?</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_2} alt="" />
                <div>
                  <h3>waadaa abera</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam, voluptatem inventore repudiandae explicabo delectus dicta facilis debitis reprehenderit a, esse incidunt ab sequi ipsum temporibus eos asperiores? Quo, possimus?</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Hillina Ahmeddin</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam, voluptatem inventore repudiandae explicabo delectus dicta facilis debitis reprehenderit a, esse incidunt ab sequi ipsum temporibus eos asperiores? Quo, possimus?</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Ganfuree Hirpha</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam, voluptatem inventore repudiandae explicabo delectus dicta facilis debitis reprehenderit a, esse incidunt ab sequi ipsum temporibus eos asperiores? Quo, possimus?</p>
            </div>
          </li>
         
        </ul>

      </div>
      
    </div>
  )
}

export default Testmonials
