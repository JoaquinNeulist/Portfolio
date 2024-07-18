import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_lastname: '',
    from_email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: '' // Limpia el error al cambiar el valor
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.from_name) {
      newErrors.from_name = 'El nombre es requerido.';
    } else if (formData.from_name.length < 2) {
      newErrors.from_name = 'El nombre debe tener al menos 2 caracteres.';
    }

    if (!formData.from_lastname) {
      newErrors.from_lastname = 'El apellido es requerido.';
    } else if (formData.from_lastname.length < 2) {
      newErrors.from_lastname = 'El apellido debe tener al menos 2 caracteres.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.from_email) {
      newErrors.from_email = 'El correo electrónico es requerido.';
    } else if (!emailPattern.test(formData.from_email)) {
      newErrors.from_email = 'El correo electrónico no es válido.';
    }

    if (!formData.message) {
      newErrors.message = 'El mensaje es requerido.';
    } else if (formData.message.length < 50) {
      newErrors.message = 'El mensaje debe tener al menos 50 caracteres.';
    } else if (formData.message.length > 300) {
      newErrors.message = 'El mensaje no puede exceder los 300 caracteres.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // No enviar si hay errores
    }

    emailjs.sendForm('service_iae4hos', 'template_uz5c8am', e.target, 'ZXc1crZlNwdipy1wG')
      .then((result) => {
        console.log(result.text);
        alert('¡Mensaje enviado con éxito!');
      }, (error) => {
        console.log(error.text);
        alert('No se pudo enviar el mensaje, por favor intenta nuevamente.');
      });

    setFormData({
      from_name: '',
      from_lastname: '',
      from_email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="card bg-white p-6 rounded-lg shadow-lg">
          <img src="/myphoto.jpg" alt="Tu Foto" className="w-32 h-32 rounded-full object-cover mx-auto" />
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold">Joaquin Neulist</h2>
            <p className="text-gray-600">Desarrollador Full Stack</p>
            <div className="flex justify-center mt-4">
              <a href="https://github.com/JoaquinNeulist" className="mx-2 text-gray-500 hover:text-black">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/joaquinandresneulist" className="mx-2 text-gray-500 hover:text-black">
                <FaLinkedin size={30} />
              </a>
              <a href="mailto:joaquinneulist@gmail.com" className="mx-2 text-gray-500 hover:text-black">
                <FaEnvelope size={30} />
              </a>
              <a href="/JoaquinNeulist.pdf" className="mx-2 text-gray-500 hover:text-black" download>
                <FaFilePdf size={30} />
              </a>
            </div>
          </div>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="from_name" className="sr-only">Nombre</label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                required
                value={formData.from_name}
                onChange={handleChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.from_name ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Nombre"
              />
              {errors.from_name && <p className="text-red-500 text-sm">{errors.from_name}</p>}
            </div>
            <div>
              <label htmlFor="from_lastname" className="sr-only">Apellido</label>
              <input
                id="from_lastname"
                name="from_lastname"
                type="text"
                required
                value={formData.from_lastname}
                onChange={handleChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.from_lastname ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Apellido"
              />
              {errors.from_lastname && <p className="text-red-500 text-sm">{errors.from_lastname}</p>}
            </div>
            <div>
              <label htmlFor="from_email" className="sr-only">Correo electrónico</label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                required
                value={formData.from_email}
                onChange={handleChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.from_email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Correo electrónico"
              />
              {errors.from_email && <p className="text-red-500 text-sm">{errors.from_email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Mensaje</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Mensaje"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              <p className="text-gray-500 text-sm mt-1">{formData.message.length}/300 caracteres</p>
              {formData.message.length < 50 && (
                <p className="text-red-500 text-sm">El mensaje debe tener al menos 50 caracteres.</p>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
