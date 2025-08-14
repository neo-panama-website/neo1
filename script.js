document.addEventListener('DOMContentLoaded', () => {
    // Language selection functionality
    const languageSelect = document.getElementById('languageSelect');
    const elementsToTranslate = document.querySelectorAll('[data-lang-key]');

    // Translations for English, Spanish, and Korean
    const translations = {
        en: {
            // General
            'home': 'HOME',
            'about': 'ABOUT US',
            'services': 'SERVICES',
            'contact': 'CONTACT US',
            'privacy-policy': 'Privacy Policy',
            'terms-of-service': 'Terms of Service',
            'copyright': '&copy; 2025 Neo Panama Maritime Service. All rights reserved.',
            'learn-more': 'Learn More',
            'submit-button': 'Send Message',

            // Home page
            'hero-slogan': 'Delivering Freshness & Reliability to Your Vessels, At the Heart of Panama\'s Shipping.',
            'hero-tagline': '24/7 Swift & Hygienic Provisions. Your Premier Choice for a Seamless Voyage.',
            'request-quote': 'Request a Quote',
            'explore-services': 'Explore Our Services',
            'our-promise-title': 'Our Promise',
            'promise1-title': 'Ultra-Fast Fresh Delivery',
            'promise1-desc': '24-hour delivery of top-grade fresh provisions anywhere in the Panama Canal and major ports.',
            'promise2-title': 'Global Standard Quality',
            'promise2-desc': 'Strict hygiene and quality control compliant with HACCP standards.',
            'promise3-title': 'Customized Solutions',
            'promise3-desc': 'Flexible meal plans and item configurations tailored to the needs of diverse national crews.',
            'services-preview-title': 'Our Services',
            'service1-title': 'Ship Chandling',
            'service1-desc': 'Deck, engine, cabin stores, and more.',
            'service2-title': 'Fresh Provisions Supply',
            'service2-desc': 'High-quality food and beverages.',
            'expansion-plans-title': 'Expansion Plans',
            'expansion-desc': 'We will gradually expand our service areas based on the trust we\'ve built, becoming your strongest partner beyond just providing provisions.',
            'expansion1-title': 'Ship Chandling / Technical & Bonded Stores',
            'expansion1-desc': 'Based on the trust earned from our provisions, we plan to supply all essential ship supplies — deck, engine room, safety, electrical, medical, etc. — with the highest quality. We are building a reliable global supply network.',
            'expansion2-title': 'Bunker & Lubricants',
            'expansion2-desc': 'Under strict quality control and environmental compliance, we plan to offer competitive prices for essential bunker fuels (MGO, VLSFO, etc.) and various types of lubricants. Details will be updated soon.',
            'why-choose-us-title': 'Why Neo Panama Maritime Service?',
            'why-choose-us-desc': 'At the crucial crossroads of Panama shipping, we become your reliable partner beyond a simple supplier.',
            'about-us-btn': 'About Us',

            // About Us page
            'about-title': 'About Us',
            'company-intro-desc': 'At the heart of Panama\'s shipping, we supply freshness and trust to your vessel.',
            'vision-title': 'Our Vision',
            'vision-desc': 'To be the **comprehensive maritime service partner** contributing to the success of our clients\' voyages by providing top-tier marine supply services at the gateway of the Panama Canal, going beyond simple provisioning.',
            'mission-title': 'Our Mission',
            'mission-desc': 'We provide innovative and reliable solutions tailored to our clients\' needs, based on the highest quality **fresh provisions**, and contribute to the development of the Panama maritime industry through sustainable growth.',
            'values-title': 'Core Values',
            'value1-title': 'Trust',
            'value1-desc': 'Building strong relationships with clients through transparent and honest service.',
            'value2-title': 'Innovation',
            'value2-desc': 'Developing efficient and optimized services in line with the changing maritime market.',
            'value3-title': 'Excellence',
            'value3-desc': 'Striving for perfection and the highest quality in all services and products.',
            'value4-title': 'Customer Focus',
            'value4-desc': 'Providing customized solutions with our clients\' success as our top priority.',
            'value5-title': 'Sustainability',
            'value5-desc': 'Respecting the environment and fulfilling social responsibility for sustainable growth.',
            'team-title': 'Our Team',
            'team-desc': 'Our experienced team supports the successful voyage of your company.',
            'member1-name': 'John Doe',
            'member1-title': 'CEO',
            'member1-desc': 'A professional with 20 years of experience in global shipping and logistics.',
            'member2-name': 'Jane Smith',
            'member2-title': 'Operations Manager',
            'member2-desc': 'An expert in vessel provisioning in the Panama Canal area.',

            // Services page
            'services-title': 'Services',
            'services-hero-title': 'Our Services',
            'services-intro-desc': 'Explore our wide range of maritime solutions.',
            'services-list-title': 'Our Main Services',
            'service3-title': 'Bunker & Lubricants',
            'service3-desc': 'Fuel and lubricants.',
            'service4-title': 'Auxiliary Services',
            'service4-desc': 'Specialized support tailored to your vessel\'s needs.',
            'expansion-cta-text': 'Inquiries about future service expansions are always welcome. We look forward to future partnerships.',

            // Contact Us page
            'contact-title': 'Contact Us',
            'contact-details-title': 'Contact Information',
            'emergency-line-label': '365-Day Emergency Line:',
            'emergency-phone': '+507 12345678',
            'general-inquiry-label': 'General Inquiries (Office):',
            'general-phone': '+507 87654321',
            'email-label': 'Email:',
            'email-address': 'info@neopanama.com',
            'address-label': 'Office Address:',
            'full-address': 'Building A, Suite B, Av. Balboa, Panama City, Panama',
            'office-hours-label': 'Office Hours:',
            'office-hours-details': 'Monday - Friday, 08:00 - 17:00 (Panama Time)',
            'emergency-note': 'Providing fast and accurate service, the best choice for safe navigation.',
            'form-title': 'Online Inquiry Form',
            'label-company': 'Company / Vessel Name:',
            'label-contact': 'Contact Person Name:',
            'label-email': 'Email:',
            'label-phone': 'Phone Number:',
            'label-inquiry-type': 'Type of Inquiry:',
            'select-option': 'Select an option',
            'option-provisions': 'Provisions Quote',
            'option-chandling': 'Chandling Inquiry',
            'option-bunker': 'Bunker / Lubricants Inquiry',
            'option-other': 'Other',
            'label-message': 'Message:',
            'label-file': 'Attach File (Optional):',
            'map-note': 'The map shows the approximate location of our office.',
        },
        es: {
            // General
            'home': 'INICIO',
            'about': 'NOSOTROS',
            'services': 'SERVICIOS',
            'contact': 'CONTACTO',
            'privacy-policy': 'Política de Privacidad',
            'terms-of-service': 'Términos de Servicio',
            'copyright': '&copy; 2025 Neo Panama Maritime Service. Todos los derechos reservados.',
            'learn-more': 'Saber más',
            'submit-button': 'Enviar Mensaje',

            // Home page
            'hero-slogan': 'Entregando Frescura y Confiabilidad a Sus Naves, en el Corazón del Transporte Marítimo de Panamá.',
            'hero-tagline': 'Provisiones Higiénicas y Rápidas 24/7. Su Elección Principal para un Viaje sin Contratiempos.',
            'request-quote': 'Solicitar una Cotización',
            'explore-services': 'Explorar Nuestros Servicios',
            'our-promise-title': 'Nuestra Promesa',
            'promise1-title': 'Entrega Fresca Ultra-Rápida',
            'promise1-desc': 'Entrega en 24 horas de provisiones frescas de primera calidad en cualquier lugar del Canal de Panamá y puertos principales.',
            'promise2-title': 'Calidad Estándar Global',
            'promise2-desc': 'Control de higiene y calidad estricto, cumpliendo con los estándares HACCP.',
            'promise3-title': 'Soluciones Personalizadas',
            'promise3-desc': 'Planes de comidas flexibles y configuraciones de artículos adaptadas a las necesidades de tripulaciones de diversas nacionalidades.',
            'services-preview-title': 'Nuestros Servicios',
            'service1-title': 'Suministros Navales',
            'service1-desc': 'Cubierta, sala de máquinas, provisiones de cabina y más.',
            'service2-title': 'Suministro de Provisiones Frescas',
            'service2-desc': 'Alimentos y bebidas de alta calidad.',
            'expansion-plans-title': 'Planes de Expansión',
            'expansion-desc': 'Expandiremos gradualmente nuestras áreas de servicio basadas en la confianza para convertirnos en su socio más fuerte, más allá del simple suministro de provisiones.',
            'expansion1-title': 'Suministros Navales / Almacenes Técnicos y Adunados',
            'expansion1-desc': 'Basados en la confianza obtenida con las provisiones, planeamos suministrar todo tipo de provisiones esenciales para buques —cubierta, sala de máquinas, seguridad, eléctricas, médicas, etc.— con la más alta calidad. Estamos construyendo una red de suministro global confiable.',
            'expansion2-title': 'Búnker y Lubricantes',
            'expansion2-desc': 'Bajo estricto control de calidad y cumplimiento medioambiental, planeamos ofrecer precios competitivos para combustibles de búnker esenciales (MGO, VLSFO, etc.) y varios tipos de lubricantes. Los detalles se actualizarán pronto.',
            'why-choose-us-title': '¿Por qué Neo Panama Maritime Service?',
            'why-choose-us-desc': 'En el cruce crucial del transporte marítimo de Panamá, nos convertimos en su socio confiable más allá de un simple proveedor.',
            'about-us-btn': 'Sobre Nosotros',

            // About Us page
            'about-title': 'Sobre Nosotros',
            'company-intro-desc': 'En el corazón del transporte marítimo de Panamá,<br>suministramos frescura y confianza a su nave.',
            'vision-title': 'Nuestra Visión',
            'vision-desc': 'Ser el **socio integral de servicios marítimos** que contribuye al éxito de los viajes de nuestros clientes, proporcionando servicios de suministro naval de primera categoría en la puerta de entrada del Canal de Panamá, yendo más allá del simple aprovisionamiento.',
            'mission-title': 'Nuestra Misión',
            'mission-desc': 'Ofrecemos soluciones innovadoras y confiables, adaptadas a las necesidades de nuestros clientes, basadas en las **provisiones frescas** de la más alta calidad, y contribuimos al desarrollo de la industria marítima de Panamá a través del crecimiento sostenible.',
            'values-title': 'Valores Fundamentales',
            'value1-title': 'Confianza',
            'value1-desc': 'Construir relaciones sólidas con los clientes a través de un servicio transparente y honesto.',
            'value2-title': 'Innovación',
            'value2-desc': 'Desarrollar servicios eficientes y optimizados en línea con el mercado marítimo cambiante.',
            'value3-title': 'Excelencia',
            'value3-desc': 'Esforzarse por la perfección y la más alta calidad en todos los servicios y productos.',
            'value4-title': 'Orientación al Cliente',
            'value4-desc': 'Proporcionar soluciones personalizadas con el éxito de nuestros clientes como nuestra máxima prioridad.',
            'value5-title': 'Sostenibilidad',
            'value5-desc': 'Respetar el medio ambiente y cumplir con la responsabilidad social para un crecimiento sostenible.',
            'team-title': 'Nuestro Equipo',
            'team-desc': 'Nuestro experimentado equipo apoya el viaje exitoso de su empresa.',
            'member1-name': 'John Doe',
            'member1-title': 'CEO',
            'member1-desc': 'Un profesional con 20 años de experiencia en transporte marítimo y logística global.',
            'member2-name': 'Jane Smith',
            'member2-title': 'Gerente de Operaciones',
            'member2-desc': 'Una experta en el aprovisionamiento de buques en el área del Canal de Panamá.',

            // Services page
            'services-title': 'Servicios',
            'services-hero-title': 'Nuestros Servicios',
            'services-intro-desc': 'Explore nuestra amplia gama de soluciones marítimas.',
            'services-list-title': 'Nuestros Principales Servicios',
            'service3-title': 'Búnker y Lubricantes',
            'service3-desc': 'Combustibles y lubricantes.',
            'service4-title': 'Servicios Auxiliares',
            'service4-desc': 'Soporte especializado adaptado a las necesidades de su embarcación.',
            'expansion-cta-text': 'Las consultas sobre futuras expansiones de servicio son siempre bienvenidas. Esperamos futuras asociaciones.',

            // Contact Us page
            'contact-title': 'Contáctenos',
            'contact-details-title': 'Información de Contacto',
            'emergency-line-label': 'Línea de Emergencia 24/7:',
            'emergency-phone': '+507 12345678',
            'general-inquiry-label': 'Consulta General (Oficina):',
            'general-phone': '+507 87654321',
            'email-label': 'Email:',
            'email-address': 'info@neopanama.com',
            'address-label': 'Dirección de la Oficina:',
            'full-address': 'Edificio A, Suite B, Av. Balboa, Ciudad de Panamá, Panamá',
            'office-hours-label': 'Horario de Oficina:',
            'office-hours-details': 'Lunes a Viernes, 08:00 - 17:00 (Hora de Panamá)',
            'emergency-note': 'Brindando un servicio rápido y preciso, la mejor opción para una navegación segura.',
            'form-title': 'Formulario de Consulta en Línea',
            'label-company': 'Nombre de la Empresa / Embarcación:',
            'label-contact': 'Nombre de la Persona de Contacto:',
            'label-email': 'Correo Electrónico:',
            'label-phone': 'Número de Teléfono:',
            'label-inquiry-type': 'Tipo de Consulta:',
            'select-option': 'Seleccione una opción',
            'option-provisions': 'Cotización de Provisiones',
            'option-chandling': 'Consulta de Suministros',
            'option-bunker': 'Consulta de Búnker / Lubricantes',
            'option-other': 'Otro',
            'label-message': 'Mensaje:',
            'label-file': 'Adjuntar Archivo (Opcional):',
            'map-note': 'El mapa muestra la ubicación aproximada de nuestra oficina.',
        },
        ko: {
            // General
            'home': '홈',
            'about': '회사소개',
            'services': '서비스',
            'contact': '문의',
            'privacy-policy': '개인정보처리방침',
            'terms-of-service': '이용약관',
            'copyright': '&copy; 2025 Neo Panama Maritime Service. All rights reserved.',
            'learn-more': '더 보기',
            'submit-button': '메시지 보내기',

            // Home page
            'hero-slogan': '파나마 해운의 중심에서, 당신의 선박에 신선함과 신뢰를 공급합니다.',
            'hero-tagline': '24시간 365일 신속하고 위생적인 선박 물품 공급. 성공적인 항해를 위한 최고의 선택입니다.',
            'request-quote': '견적 문의',
            'explore-services': '서비스 둘러보기',
            'our-promise-title': '우리의 약속',
            'promise1-title': '초고속 신선 배송',
            'promise1-desc': '파나마 운하 및 주요 항구 어디든 24시간 내 최고 등급의 신선한 식자재를 배송합니다.',
            'promise2-title': '글로벌 표준 품질',
            'promise2-desc': 'HACCP 기준을 준수하는 엄격한 위생 및 품질 관리를 약속합니다.',
            'promise3-title': '맞춤형 솔루션',
            'promise3-desc': '다양한 국적 선원들의 요구에 맞춘 유연한 식단 및 품목 구성을 제공합니다.',
            'services-preview-title': '주요 서비스',
            'service1-title': '선용품 공급',
            'service1-desc': '갑판, 기관, 선실 소모품 등.',
            'service2-title': '신선 식자재 공급',
            'service2-desc': '고품질의 식료품 및 음료.',
            'expansion-plans-title': '확장 계획',
            'expansion-desc': '단순한 물품 공급자를 넘어, 신뢰를 바탕으로 점진적인 서비스 분야 확장을 통해 귀사의 가장 강력한 파트너가 되겠습니다.',
            'expansion1-title': '선용품 / 기술 & 보세창고',
            'expansion1-desc': '식자재 공급을 통해 얻은 신뢰를 바탕으로, 갑판, 기관실, 안전, 전기, 의료 등 선박 운항에 필수적인 모든 종류의 선용품을 최고 품질로 공급할 계획입니다. 신뢰할 수 있는 글로벌 공급망을 구축하고 있습니다.',
            'expansion2-title': '벙커 & 윤활유',
            'expansion2-desc': '엄격한 품질 관리와 환경 규제 준수 하에, 선박 운항에 필수적인 벙커 연료(MGO, VLSFO 등) 및 다양한 종류의 윤활유를 경쟁력 있는 가격으로 제공할 계획입니다. 자세한 내용은 곧 업데이트 될 예정입니다.',
            'why-choose-us-title': '왜 Neo Panama Maritime Service인가?',
            'why-choose-us-desc': '파나마 해운의 중요한 교차로에서, 우리는 단순한 공급자를 넘어 귀사의 신뢰할 수 있는 파트너가 됩니다.',
            'about-us-btn': '회사 소개',

            // About Us page
            'about-title': '회사소개',
            'company-intro-desc': '파나마 해운의 중심에서,<br>신선함과 신뢰를 당신의 선박에 공급합니다.',
            'vision-title': '우리의 비전',
            'vision-desc': '단순한 물품 공급을 넘어, 파나마 운하의 관문에서 최고의 선용품 공급 서비스를 제공하여 고객의 성공적인 항해에 기여하는 **종합 해운 서비스 파트너**가 되는 것입니다.',
            'mission-title': '우리의 미션',
            'mission-desc': '최고 품질의 **신선 식자재**를 기반으로 고객의 니즈에 맞춘 혁신적이고 신뢰성 있는 솔루션을 제공하며, 지속 가능한 성장을 통해 파나마 해운 산업 발전에 기여합니다.',
            'values-title': '핵심 가치',
            'value1-title': '신뢰',
            'value1-desc': '투명하고 정직한 서비스를 통해 고객과 강력한 관계를 구축합니다.',
            'value2-title': '혁신',
            'value2-desc': '변화하는 해운 시장에 맞춰 효율적이고 최적화된 서비스를 개발합니다.',
            'value3-title': '탁월함',
            'value3-desc': '모든 서비스와 제품에서 완벽함과 최고 품질을 추구합니다.',
            'value4-title': '고객 중심',
            'value4-desc': '고객의 성공을 최우선으로 생각하며 맞춤형 솔루션을 제공합니다.',
            'value5-title': '지속 가능성',
            'value5-desc': '환경을 존중하고 사회적 책임을 다하여 지속 가능한 성장을 이룹니다.',
            'team-title': '우리의 팀',
            'team-desc': '경험이 풍부한 우리 팀이 귀사의 성공적인 항해를 지원합니다.',
            'member1-name': '이철수',
            'member1-title': 'CEO',
            'member1-desc': '글로벌 해운 및 물류 분야 20년 경력의 전문가.',
            'member2-name': '김영희',
            'member2-title': '운영 관리자',
            'member2-desc': '파나마 운하 지역 선박 보급 전문가.',

            // Services page
            'services-title': '서비스',
            'services-hero-title': '우리의 서비스',
            'services-intro-desc': '다양한 해운 솔루션을 둘러보세요.',
            'services-list-title': '주요 서비스',
            'service3-title': '벙커 & 윤활유',
            'service3-desc': '연료 및 윤활유.',
            'service4-title': '보조 서비스',
            'service4-desc': '선박의 필요에 맞춘 전문적인 지원.',
            'expansion-cta-text': '향후 서비스 확장에 대한 문의는 언제든 환영합니다. 미래의 파트너십을 기대합니다.',

            // Contact Us page
            'contact-title': '문의하기',
            'contact-details-title': '연락처 정보',
            'emergency-line-label': '24시간 365일 긴급 라인:',
            'emergency-phone': '+507 12345678',
            'general-inquiry-label': '일반 문의 (사무실):',
            'general-phone': '+507 87654321',
            'email-label': '이메일:',
            'email-address': 'info@neopanama.com',
            'address-label': '사무실 주소:',
            'full-address': 'Building A, Suite B, Av. Balboa, Panama City, Panama',
            'office-hours-label': '사무실 운영 시간:',
            'office-hours-details': '월요일 - 금요일, 08:00 - 17:00 (파나마 시간)',
            'emergency-note': '신속하고 정확한 서비스로 안전한 항해를 위한 최선의 선택.',
            'form-title': '온라인 문의 양식',
            'label-company': '회사 / 선박 이름:',
            'label-contact': '담당자 이름:',
            'label-email': '이메일:',
            'label-phone': '전화번호:',
            'label-inquiry-type': '문의 유형:',
            'select-option': '옵션 선택',
            'option-provisions': '식자재 견적',
            'option-chandling': '선용품 문의',
            'option-bunker': '벙커 / 윤활유 문의',
            'option-other': '기타',
            'label-message': '메시지:',
            'label-file': '파일 첨부 (선택 사항):',
            'map-note': '위 지도는 대략적인 사무실 위치를 나타냅니다.',
        }
    };

    // Function to set the page's title
    const setPageTitle = (lang) => {
        const titleElement = document.querySelector('title');
        const langKey = titleElement.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][langKey]) {
            titleElement.textContent = translations[lang][langKey];
        }
    };

    // Function to apply translations
    const applyTranslations = (lang) => {
        elementsToTranslate.forEach(element => {
            const langKey = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][langKey]) {
                const translatedText = translations[lang][langKey];
                
                // Handle bolding for specific keys like 'vision-desc' and 'mission-desc'
                if (langKey === 'vision-desc' || langKey === 'mission-desc') {
                    const parts = translatedText.split('**');
                    let newHtml = '';
                    for (let i = 0; i < parts.length; i++) {
                        if (i % 2 === 1) {
                            newHtml += `<strong>${parts[i]}</strong>`;
                        } else {
                            newHtml += parts[i];
                        }
                    }
                    element.innerHTML = newHtml;
                } else {
                    element.textContent = translatedText;
                }
            }
        });

        // Also update the page title
        setPageTitle(lang);

        // Store the selected language in local storage
        localStorage.setItem('selectedLanguage', lang);
    };

    // Event listener for language selection change
    languageSelect.addEventListener('change', (event) => {
        applyTranslations(event.target.value);
    });

    // Set initial language on page load
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLang;
    applyTranslations(savedLang);
});
