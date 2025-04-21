"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Mail, MessageCircle, Phone } from "lucide-react"
import Header from "@/components/header"
import GaleriaPerfil from "@/components/galeria-perfil"
import GaleriaSecundaria from "@/components/galeria-secundaria"
import GaleriaTercera from "@/components/galeria-tercera"

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <Header />

      {/* Información Principal */}
      {/* Buscar la sección de información principal y asegurarse de que tenga el ID "inicio" */}
      <section id="inicio" className="w-full py-12 bg-pink-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter text-[#ec407a] mb-4">
                Lic. Julia Villagómez Martínez
              </h1>
              <p className="text-xl text-[#ec407a] mb-6">Candidata al Poder Judicial de Veracruz</p>
              <p className="text-gray-600 mb-6">
                Comprometida con la justicia y la transparencia. Con amplia experiencia en el ámbito judicial y una
                trayectoria profesional destacada.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-[#ec407a] hover:bg-[#d81b60]"
                  onClick={() => document.getElementById("propuestas")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Conoce mis propuestas
                </Button>
                <Button
                  variant="outline"
                  className="border-[#556b2f] text-[#556b2f] hover:bg-[#556b2f] hover:text-white"
                  onClick={() => document.getElementById("carrera")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Carrera Profesional
                </Button>
                <Button
                  className="bg-pink-500 hover:bg-pink-600"
                  onClick={() => document.getElementById("contactame")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contáctame
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full">
              <Image src="/images/1-perfil.jpg" alt="Foto de la candidata" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Perfil */}
      <section className="w-full py-12 bg-pink-200/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#ec407a] mb-8 text-center">Galería de Perfil</h2>
          <GaleriaPerfil />
        </div>
      </section>

      {/* Carrera Profesional */}
      <section id="carrera" className="w-full py-12 bg-pink-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#ec407a] mb-8 text-center">Carrera Profesional</h2>
          <div className="grid grid-cols-1 gap-8">
            <Card className="border-pink-200 shadow-md">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#ec407a] mb-2">Formación Académica</h3>
                      <ul className="space-y-2 text-gray-700">
                        
    <li>• LICENCIATURA EN DERECHO</li>
    <li>• UNIVERSIDAD VERACRUZANA (UV XALAPA)</li>                   
    <li>• MAESTRÍA EN JUICIOS ORALES EN MATERIA PENAL</li>
    <li>• UNIVERSIDAD POPULAR AUTÓNOMA DE VERACRUZ (UPAV)</li>                   
    <li>• DIPLOMADO EN MEDIADOR-CONCILIADOR-FACILITADOR</li>
    <li>• UNIVERSIDAD VERACRUZANA(UV XALAPA)</li>
    <li>• CERTIFICACIÓN DEL CEJAV (CEJAV/30-MCE 209/2022)</li>
    
    <li>• MAESTRÍA EN MATERIA PENAL</li>
    <li>• DOCTORADO EN NEUROCIENCIAS ESTRUCTURALES</li>
    <li>• NEUROCIENCIAS FORENSES</li>
    <li>• UNIVERSIDAD VERACRUZANA</li>
   
    <li>• DIPLOMADO EN JUICIOS ORALES DEL NUEVO SISTEMA DE JUSTICIA PENAL EN MÉXICO</li>
    <li>• ESCUELA JUDICIAL DEL TRIBUNAL SUPERIOR DE JUSTICIA DEL ESTADO</li>
    <li>• DIPLOMADO EN MEDIOS ALTERNOS DE RESOLUCIÓN DE CONFLICTOS</li>
    <li>• CURSO: FEMINICIDIO: JUZGAR CON PERSPECTIVA SOCIAL</li>
    <li>• CURSO: MANUAL PARA JUZGAR CON PERSPECTIVA DE GÉNERO EN MATERIA PENAL</li>
    <li>• CURSO: LOS CRITERIOS DE INTERPRETACIÓN DEL JUEZ CONSTITUCIONAL EUROPEO</li>
    <li>• CURSO: CONTRATOS PRIVADOS: VIGENCIA JURÍDICA, IMPLICACIONES ADMINISTRATIVAS, CATASTRALES Y FISCALES</li>
    <li>• CURSO: LA HISTORIA DEL DERECHO EN LA FORMACIÓN DE LOS JURISTAS Y DE LOS JUZGADORES</li>
    <li>• CURSO: HERRAMIENTAS DIGITALES PARA FOMENTAR LA PARTICIPACIÓN CIUDADANA</li>
    <li>• CURSO: CONVERSATORIO SOBRE ALGUNOS TÓPICOS DE LA JUSTICIA PENAL PARA ADOLESCENTES</li>
    <li>• CURSO: PRUEBA Y EJECUCIÓN PENAL</li>
    <li>• CURSO: PROTOCOLO PARA LA PREVENCIÓN, ATENCIÓN Y SANCIÓN DEL HOSTIGAMIENTO Y ACOSO SEXUAL EN EL PODER JUDICIAL DEL ESTADO DE VERACRUZ</li>
    <li>• CURSO: LOS RETOS EN LA IMPARTICIÓN DE JUSTICIA EN EL CONTEXTO DE LAS NUEVAS TECNOLOGÍAS Y LA INTELIGENCIA ARTIFICIAL</li>
    <li>• CURSO: LA METODOLOGÍA EN LA INVESTIGACIÓN DEL HOMICIDIO CON EL SISTEMA PENAL ACTUAL</li>
    <li>• CURSO: CIBERSEGURIDAD</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#ec407a] mb-2">Experiencia Profesional</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>
                          <span className="font-semibold">PRIMERA SALA:</span> OFICIAL ADMINISTRATIVO POR CONTRATO
                          (15-05-91 a 30-07-96)
                        </p>
                        <p>
                          <span className="font-semibold">TERCERA SALA:</span> OFICIAL ADMINISTRATIVO INTERINO (23-09-96 a 03-11-96)
                        </p>
                        <p>
                          <span className="font-semibold">TERCERA SALA:</span> OFICIAL ADMINISTRATIVO INTERINO ( 04-11-96 a 17-12-96)
                        </p>

                        <p>
                          <span className="font-semibold">TERCERA SALA:</span> OFICIAL ADMINISTRATIVO CONTRATO ( 06-01-97 a 30-01-98)
                        </p>
                        <p>
                          <span className="font-semibold">JUZGADO MUNICIPAL DE ACATLAN, VER:</span> JUEZ (29-01-98 a 19-04-98)
                        </p>
                        <p>
                          <span className="font-semibold">JUZGADO MUNICIPAL DE CATEMACO, VER:</span> JUEZ (20-04-98 a 18-07-98)
                        </p>
                        <p>
                          <span className="font-semibold">JUZGADO MUNICIPAL DE JILOTEPEC, VER:</span> JUEZ (03-08-98 a
                          28-08-98)
                        </p>
                        <p>
                          <span className="font-semibold">JUZGADO MUNICIPAL DE BANDERILLA, VER:</span> JUEZ (29-08-98 a
                          15--05-00)
                        </p>
                        <p>
                          <span className="font-semibold">JUZGADO MUNICIPAL DE JALACINGO, VER:</span> JUEZ (29-08-98 a
                          28-08-98)
                        </p>
                        <p>
                          <span className="font-semibold">JUZGADO MUNICIPAL DE RAFAEL LUCIO, VER:</span> JUEZ (01-02-09
                          a 18-07-98)
                        </p>
                        <p>
                          <span className="font-semibold">JUZGADO MUNICIPAL DE TLAPACOYAN, VER:</span> JUEZ (19-03-2015
                          a 18-03-15)
                        </p>
                        <p>
                          <span className="font-semibold">JUZGADO MUNICIPAL DE VEGA DE ALATORRE, VER:</span> JUEZ
                          (ACTUALMENTE)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Segunda Galería */}
      <section className="w-full py-12 bg-pink-200/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#ec407a] mb-8 text-center">Galería de Actividades</h2>
          <GaleriaSecundaria />
        </div>
      </section>

      {/* Propuestas */}
      <section id="propuestas" className="w-full py-12 bg-pink-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#ec407a] mb-8 text-center">Propuestas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">1. Justicia Accesible</h3>
                <p className="text-gray-600">
                  Implementar mecanismos para facilitar el acceso a la justicia para todos los ciudadanos.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">2. Transparencia</h3>
                <p className="text-gray-600">
                  Promover la transparencia en todos los procesos judiciales y administrativos.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">3. Modernización</h3>
                <p className="text-gray-600">
                  Digitalizar procesos para agilizar trámites y reducir tiempos de espera.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">4. Capacitación Continua</h3>
                <p className="text-gray-600">
                  Implementar programas de capacitación continua para todo el personal judicial.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">5. Justicia con Perspectiva de Género</h3>
                <p className="text-gray-600">
                  Fortalecer la aplicación de la justicia con perspectiva de género en todos los casos.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">6. Mediación y Conciliación</h3>
                <p className="text-gray-600">
                  Promover métodos alternativos de resolución de conflictos para descongestionar tribunales.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">7. Atención a Grupos Vulnerables</h3>
                <p className="text-gray-600">
                  Crear protocolos especiales para la atención de grupos vulnerables en el sistema judicial.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">8. Ética Judicial</h3>
                <p className="text-gray-600">
                  Fortalecer los códigos de ética y conducta para todos los servidores judiciales.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">9. Justicia Ambiental</h3>
                <p className="text-gray-600">
                  Implementar criterios de justicia ambiental en las resoluciones judiciales pertinentes.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">10. Cooperación Interinstitucional</h3>
                <p className="text-gray-600">
                  Fortalecer la cooperación entre instituciones para una mejor administración de justicia.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">11. Evaluación de Desempeño</h3>
                <p className="text-gray-600">
                  Implementar sistemas de evaluación de desempeño transparentes para funcionarios judiciales.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#ec407a]/20 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#ec407a] mb-2">12. Acceso a la Información</h3>
                <p className="text-gray-600">
                  Mejorar los sistemas de acceso a la información judicial para la ciudadanía.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tercera Galería */}
      <section className="w-full py-12 bg-pink-200/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#ec407a] mb-8 text-center">Galería de Reconocimientos</h2>
          <GaleriaTercera />
        </div>
      </section>

      {/* Contacto */}
      <section id="contactame" className="w-full py-12 bg-pink-200/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#ec407a] mb-8 text-center">Contáctame</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-pink-200 bg-white shadow-md">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ec407a] focus:ring-[#ec407a]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ec407a] focus:ring-[#ec407a]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ec407a] focus:ring-[#ec407a]"
                    ></textarea>
                  </div>
                  <Button className="bg-[#ec407a] hover:bg-[#d81b60] w-full">Enviar Mensaje</Button>
                </form>
              </CardContent>
            </Card>
            <div>
              <Card className="border-pink-200 bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#ec407a] mb-4">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#ec407a]" />
                      <span>lic.juliavillagomez31@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#ec407a]" />
                      <span>229 422 4577</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-5 w-5 text-[#ec407a]" />
                      <a
                        href="https://wa.me/522294224577"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ec407a] hover:underline"
                      >
                        WhatsApp: 229 422 4577
                      </a>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-[#ec407a] mb-4">Sígueme en Redes Sociales</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=61575199135422"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ec407a] hover:text-[#d81b60]"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.instagram.com/juez.juliavillagomezmartinez/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ec407a] hover:text-[#d81b60]"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-[#ec407a] hover:text-[#d81b60]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 12a9 9 0 0 0 9 9" />
                          <path d="M9 3v18" />
                          <path d="M15 12a9 9 0 0 1-9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#ec407a] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Lic. Julia Villagómez Martínez. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575199135422"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/juez.juliavillagomezmartinez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-pink-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a9 9 0 0 0 9 9" />
                  <path d="M9 3v18" />
                  <path d="M15 12a9 9 0 0 1-9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
