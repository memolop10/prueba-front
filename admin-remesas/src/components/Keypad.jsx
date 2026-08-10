import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace, faCheck } from '@fortawesome/free-solid-svg-icons'
import '../styles/Keypad.scss'

export default function Keypad({ onKey, onEnter, onBack }) {
  return (
    <div className="keypad">
      <button className="keypad__btn" onClick={() => onKey('1')}>1</button>
      <button className="keypad__btn" onClick={() => onKey('2')}>2</button>
      <button className="keypad__btn" onClick={() => onKey('3')}>3</button>
      <button className="keypad__btn keypad__btn--back keypad__btn--span-2-rows" onClick={onBack} title="Borrar">
        <FontAwesomeIcon icon={faBackspace} size="lg" />
      </button>

      <button className="keypad__btn" onClick={() => onKey('4')}>4</button>
      <button className="keypad__btn" onClick={() => onKey('5')}>5</button>
      <button className="keypad__btn" onClick={() => onKey('6')}>6</button>

      <button className="keypad__btn" onClick={() => onKey('7')}>7</button>
      <button className="keypad__btn" onClick={() => onKey('8')}>8</button>
      <button className="keypad__btn" onClick={() => onKey('9')}>9</button>
      <button className="keypad__btn keypad__btn--enter keypad__btn--span-2-rows" onClick={onEnter} title="Confirmar">
        <FontAwesomeIcon icon={faCheck} size="lg" />
      </button>

      <button className="keypad__btn keypad__btn--span-2-cols" onClick={() => onKey('0')}>0</button>
      <button className="keypad__btn" onClick={() => onKey('.')}>.</button>
    </div>
  )
}
