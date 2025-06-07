'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface AgeResult {
  years: number | null
  months: number | null
  days: number | null
}

interface ValidationErrors {
  day?: string
  month?: string
  year?: string
}

export default function AgeCalculator() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [age, setAge] = useState<AgeResult>({ years: null, months: null, days: null })
  const [isAnimating, setIsAnimating] = useState(false)

  const validateInputs = (): boolean => {
    const newErrors: ValidationErrors = {}
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() + 1
    const currentDay = new Date().getDate()

    // Verificar se os campos estão vazios
    if (!day) newErrors.day = 'Este campo é obrigatório'
    if (!month) newErrors.month = 'Este campo é obrigatório'
    if (!year) newErrors.year = 'Este campo é obrigatório'

    // Se algum campo estiver vazio, retornar mais cedo
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return false
    }

    const dayNum = parseInt(day)
    const monthNum = parseInt(month)
    const yearNum = parseInt(year)

    // Validar dia
    if (dayNum < 1 || dayNum > 31) {
      newErrors.day = 'Deve ser um dia válido'
    }

    // Validar mês
    if (monthNum < 1 || monthNum > 12) {
      newErrors.month = 'Deve ser um mês válido'
    }

    // Validar ano
    if (yearNum > currentYear) {
      newErrors.year = 'Deve estar no passado'
    }

    // Verificar se a data é válida (ex: 31 de abril não existe)
    const testDate = new Date(yearNum, monthNum - 1, dayNum)
    if (testDate.getDate() !== dayNum || testDate.getMonth() !== monthNum - 1 || testDate.getFullYear() !== yearNum) {
      newErrors.day = 'Deve ser uma data válida'
    }

    // Verificar se a data está no futuro
    const inputDate = new Date(yearNum, monthNum - 1, dayNum)
    const today = new Date(currentYear, currentMonth - 1, currentDay)
    if (inputDate > today) {
      newErrors.year = 'Deve estar no passado'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateAge = () => {
    if (!validateInputs()) return

    const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    const today = new Date()

    let years = today.getFullYear() - birthDate.getFullYear()
    let months = today.getMonth() - birthDate.getMonth()
    let days = today.getDate() - birthDate.getDate()

    if (days < 0) {
      months--
      const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
      days += daysInPrevMonth
    }

    if (months < 0) {
      years--
      months += 12
    }

    // Animar os números
    setIsAnimating(true)
    setAge({ years, months, days })
    
    setTimeout(() => setIsAnimating(false), 600)
  }

  const AnimatedNumber = ({ value, label }: { value: number | null; label: string }) => (
    <div className="text-5xl md:text-7xl font-extrabold italic leading-tight">
      <span 
        className={`text-purple-500 transition-all duration-600 ${
          isAnimating ? 'animate-pulse-custom' : ''
        }`}
      >
        {value !== null ? value : '--'}
      </span>
      <span className="text-black ml-2">{label}</span>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl rounded-br-[150px] p-8 md:p-12 w-full max-w-2xl shadow-lg">
        {/* Formulário de Entrada */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8">
          {/* Campo Dia */}
          <div>
            <label 
              className={`block text-xs font-bold mb-2 tracking-widest ${
                errors.day ? 'text-red-400' : 'text-gray-500'
              }`}
            >
              DIA
            </label>
            <input
              type="number"
              placeholder="DD"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className={`w-full text-2xl font-bold p-4 border-2 rounded-lg focus:outline-none focus:border-purple-500 ${
                errors.day ? 'border-red-400' : 'border-gray-200'
              }`}
              min="1"
              max="31"
            />
            {errors.day && (
              <p className="text-red-400 text-xs italic mt-2">{errors.day}</p>
            )}
          </div>

          {/* Campo Mês */}
          <div>
            <label 
              className={`block text-xs font-bold mb-2 tracking-widest ${
                errors.month ? 'text-red-400' : 'text-gray-500'
              }`}
            >
              MÊS
            </label>
            <input
              type="number"
              placeholder="MM"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={`w-full text-2xl font-bold p-4 border-2 rounded-lg focus:outline-none focus:border-purple-500 ${
                errors.month ? 'border-red-400' : 'border-gray-200'
              }`}
              min="1"
              max="12"
            />
            {errors.month && (
              <p className="text-red-400 text-xs italic mt-2">{errors.month}</p>
            )}
          </div>

          {/* Campo Ano */}
          <div>
            <label 
              className={`block text-xs font-bold mb-2 tracking-widest ${
                errors.year ? 'text-red-400' : 'text-gray-500'
              }`}
            >
              ANO
            </label>
            <input
              type="number"
              placeholder="AAAA"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={`w-full text-2xl font-bold p-4 border-2 rounded-lg focus:outline-none focus:border-purple-500 ${
                errors.year ? 'border-red-400' : 'border-gray-200'
              }`}
              min="1900"
              max={new Date().getFullYear()}
            />
            {errors.year && (
              <p className="text-red-400 text-xs italic mt-2">{errors.year}</p>
            )}
          </div>
        </div>

{/* Botão de Envio */}
<div className="relative mb-12 mt-16">
  <hr className="border-gray-200" />
  <button
    onClick={calculateAge}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 md:right-1/2 md:translate-x-1/2 bg-purple-500 hover:bg-black transition-colors duration-300 rounded-full p-6 group"
  >
    <img 
      src="/images/icon-arrow.svg" 
      alt="Calcular" 
      width={24}
      height={24}
      className="transform group-hover:scale-110 transition-transform duration-300 filter brightness-0 invert"
    />
  </button>
</div>

        {/* Resultados */}
        <div className="space-y-2">
          <AnimatedNumber value={age.years} label="anos" />
          <AnimatedNumber value={age.months} label="meses" />
          <AnimatedNumber value={age.days} label="dias" />
        </div>
      </div>
    </div>
  )
}