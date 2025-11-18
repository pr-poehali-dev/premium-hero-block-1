import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F1E8] via-[#EFEAE1] to-[#F5F1E8] overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1QjdBNjQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJ2LTJoLTJ2Mmgyem0wLTJ2LTJoMnYyaC0yem0yIDB2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0tNCAyaDJ2MmgtMnYtMnptMiAydjJoMnYtMmgtMnptMC00aDJ2MmgtMnYtMnptMC0yaDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        
        <svg 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] opacity-[0.08] pointer-events-none transition-transform duration-1000 ease-out"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px) scale(${1 + scrollY * 0.0002})` }}
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M100 30 L170 80 L170 170 L30 170 L30 80 Z M60 100 L60 150 L90 150 L90 100 Z M110 100 L110 150 L140 150 L140 100 Z" 
            stroke="#5B7A64" 
            strokeWidth="2" 
            fill="none"
          />
        </svg>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in mb-12">
              <img 
                src="https://cdn.poehali.dev/files/6fd752b3-c9cf-416a-94ac-484d20b470c3.png" 
                alt="Родной"
                className="w-[180px] h-[180px] md:w-[180px] md:h-[180px] mx-auto object-contain animate-pulse"
                style={{ animationDuration: '3s' }}
              />
            </div>
            
            <h1 className="text-[34px] md:text-[54px] leading-[1.15] font-semibold tracking-tight text-[#1C2B22] animate-fade-in-delay-1 mb-8">
              Дом долголетия «Родной» — место, где забота становится качеством жизни
            </h1>
            
            <p className="text-[16px] md:text-[22px] leading-[1.45] text-[#46564B] font-light max-w-[800px] mx-auto animate-fade-in-delay-2 mb-8">
              Мы создали пространство, где люди старшего поколения живут в спокойной, уважительной и продуманной среде.
              Здесь всё организовано так, чтобы человеку было комфортно, привычно и по-домашнему спокойно — каждый день.
            </p>
            
            <p className="text-[16px] md:text-[20px] leading-[1.45] text-[#46564B] font-light max-w-[800px] mx-auto animate-fade-in-delay-2 mb-12">
              Наша команда обеспечивает внимательное и профессиональное сопровождение, сохраняя естественный ритм жизни, привычки и ощущение собственного пространства.
            </p>
            
            <div className="animate-fade-in-delay-3">
              <Button 
                size="lg" 
                className="text-[18px] px-[46px] py-[18px] h-auto rounded-xl bg-[#5B7A64] hover:bg-[#4E6D57] text-white shadow-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Записаться на экскурсию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-5xl md:text-6xl font-light text-foreground">
                «Родной» — это современный дом долголетия
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                В котором человек остаётся в центре внимания. Мы создаём атмосферу, где важны спокойствие, уважение, участие и человеческое тепло.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Где поддержка ощущается ненавязчиво, где удобно и безопасно жить, общаться, заниматься привычными делами и быть среди людей.
              </p>
              <p className="text-xl text-foreground leading-relaxed">
                Наша философия проста: <span className="font-semibold text-primary">дом — это не стены, а среда, где тебя понимают, слышат и относятся по-человечески.</span>
              </p>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/cf302c25-631a-4e3e-9436-cf246acafe0b.png"
                alt="Здание дома долголетия Родной"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light text-foreground">
              Три уровня жизни
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Пространства для разных ритмов и потребностей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-scale-in-delay-1 rounded-3xl overflow-hidden group">
              <CardContent className="p-10 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Home" className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-semibold text-foreground">
                  Пространство активной жизни
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Для тех, кто ценит общение, занятия и привычный ритм. Уютные комнаты, мастерские, мероприятия, прогулки, чтение, музыка — атмосфера, в которой легко оставаться в движении.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-scale-in-delay-2 rounded-3xl overflow-hidden group">
              <CardContent className="p-10 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="HeartHandshake" className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-semibold text-foreground">
                  Пространство комфортного сопровождения
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Для людей, которым важно, чтобы рядом всегда были внимательные специалисты, готовые помочь в повседневных делах. Спокойная, структурированная среда, где сохраняются привычки и чувство самостоятельности.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-scale-in-delay-3 rounded-3xl overflow-hidden group">
              <img 
                src="https://cdn.poehali.dev/files/eb351228-7848-4c90-8847-dfee93ac76e8.png"
                alt="Комната с медицинским оборудованием"
                className="w-full h-[240px] object-cover"
              />
              <CardContent className="p-10 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Heart" className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-semibold text-foreground">
                  Пространство постоянного внимания
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Среда, созданная для максимального комфорта и безопасности, с более тесным участием команды. Тихие комнаты, чуткое наблюдение, продуманная организация дня — всё, что делает жизнь спокойной и устойчивой.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-20 max-w-5xl mx-auto">
            <Card className="bg-card border-0 shadow-2xl rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <img 
                  src="https://cdn.poehali.dev/files/58b8c2cb-d9b9-436d-94a0-a458a8790561.png"
                  alt="Двухместная комната"
                  className="w-full h-full object-cover"
                />
                <CardContent className="p-10 md:p-12 space-y-6 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name="Users" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
                    Двухместные комнаты
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Вариант размещения для тех, кто предпочитает компанию и общение. Комфортные функциональные кровати, личные тумбочки, уютная обстановка — всё для спокойной совместной жизни.
                  </p>
                  <p className="text-lg text-foreground">
                    <span className="font-semibold text-primary">Подходит для супружеских пар или тех, кто не хочет оставаться в одиночестве.</span>
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8 animate-slide-up">
              <h2 className="text-5xl md:text-6xl font-light text-foreground">
                Wellness в «Родном»
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Спокойный бассейн с тёплой водой и мягкая сауна доступны всем проживающим.
              </p>
              
              <p className="text-xl text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Это комфортный способ поддерживать подвижность, расслабляться и восстанавливать силы.</span>
              </p>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/9b6815da-c679-4932-90a8-db398ddb74b6.png"
                alt="Бассейн и сауна"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light text-foreground">
              Почему нас выбирают
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Уважение, профессионализм и человеческое участие
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              { icon: 'HeartHandshake', title: 'Уважительная среда', desc: 'Мы строим отношения, где к человеку относятся с деликатностью, вниманием и уважением.' },
              { icon: 'Users', title: 'Профессиональная команда', desc: 'Специалисты с десятилетиями опыта работы. Внимательность, чуткость и умение быть рядом без давления.' },
              { icon: 'Home', title: 'Продуманное пространство', desc: 'Спокойные комнаты, тихие зоны отдыха, естественный свет, тёплая палитра — всё создаёт ощущение дома.' },
              { icon: 'Heart', title: 'Человеческое участие', desc: 'Разговор, прогулка, музыка, чай, хобби — здесь есть место для каждого маленького жизненного удовольствия.' },
              { icon: 'Eye', title: 'Прозрачность для семьи', desc: 'Регулярное общение, открытость, возможность связаться в удобное время — семья всегда знает, что всё в порядке.' }
            ].map((item, index) => (
              <div 
                key={index}
                className={`space-y-4 animate-slide-up`}
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={item.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="animate-scale-in order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/files/63300010-79b1-43fe-86cb-73f7dc53c176.png"
                alt="Зал ЛФК и реабилитации"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="space-y-8 animate-slide-up-delay order-1 md:order-2">
              <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">
                Сопровождение и забота
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Команда «Родного» обеспечивает профессиональное сопровождение, которое органично вписывается в повседневную жизнь человека. Наши специалисты внимательно относятся к состоянию, привычкам и предпочтениям — спокойно, деликатно и уважительно.
              </p>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>наблюдению за самочувствием</span>
                </p>
                <p className="text-lg text-muted-foreground flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>поддержанию привычного режима</span>
                </p>
                <p className="text-lg text-muted-foreground flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>аккуратной организации дня</span>
                </p>
                <p className="text-lg text-muted-foreground flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>психологическому и эмоциональному комфорту</span>
                </p>
              </div>
              
              <p className="text-xl text-foreground mt-8">
                <span className="font-semibold text-primary">Сопровождение здесь — это не про контроль, а про участие.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Стоимость
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Стоимость проживания формируется открыто и понятно. Без скрытых платежей, без непредвиденных доплат.
            </p>
            
            <Card className="bg-background border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-12 space-y-6">
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3 py-4 border-b border-border">
                    <Icon name="Check" className="text-primary mt-1" size={24} />
                    <div>
                      <span className="text-xl font-semibold text-foreground block">Проживание</span>
                      <span className="text-muted-foreground">В выбранном пространстве</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-4 border-b border-border">
                    <Icon name="Check" className="text-primary mt-1" size={24} />
                    <div>
                      <span className="text-xl font-semibold text-foreground block">Питание</span>
                      <span className="text-muted-foreground">Трёхразовое, сбалансированное</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-4 border-b border-border">
                    <Icon name="Check" className="text-primary mt-1" size={24} />
                    <div>
                      <span className="text-xl font-semibold text-foreground block">Сопровождение</span>
                      <span className="text-muted-foreground">Участие команды в повседневной жизни</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-4">
                    <Icon name="Check" className="text-primary mt-1" size={24} />
                    <div>
                      <span className="text-xl font-semibold text-foreground block">Организация быта и досуга</span>
                      <span className="text-muted-foreground">Мероприятия, прогулки, занятия</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full text-lg py-8 rounded-full mt-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать стоимость
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-5xl md:text-6xl font-light text-primary-foreground">
                Хотите увидеть дом «Родной» лично?
              </h2>
              <p className="text-xl text-primary-foreground/80 font-light">
                Мы с удовольствием познакомим вас с нашими пространствами, покажем атмосферу и ответим на вопросы
              </p>
            </div>
            
            <Card className="bg-card border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-14 text-lg rounded-xl border-border"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-14 text-lg rounded-xl border-border"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Расскажите о том, что для вас важно"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-32 text-lg rounded-xl border-border resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full text-lg py-8 rounded-full"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-5xl md:text-6xl font-light text-foreground">
                Как нас найти
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                Екатеринбург, ул. Двинская, 24
              </p>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] animate-scale-in">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=60.597465%2C56.838011&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzExNDY2NRJf0KDQvtGB0YHQuNGPLCDQldC60LDRgtC10YDQuNC90LHRg9GA0LMsINGD0LvQuNGG0LAg0JTQstC40L3RgdC60LDRjywgMjQiCg3TxkZCFVs2XEI%2C&z=16.5"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
                title="Карта с адресом"
              />
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Icon name="MapPin" className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Адрес</h3>
                  <p className="text-muted-foreground">Екатеринбург, ул. Двинская, 24</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Icon name="Phone" className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Телефон</h3>
                  <p className="text-muted-foreground">+7 (343) 200-77-11</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Icon name="Mail" className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">info@rodnoy-dom.ru</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Дом долголетия «Родной»</h3>
              <p className="text-muted-foreground">
                Тёплый приём, открытость и уважительное отношение — с первого звонка
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (343) 200-77-11</p>
                <p>info@rodnoy-dom.ru</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Адрес</h4>
              <p className="text-muted-foreground">
                Екатеринбург, ул. Двинская, 24
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 Дом долголетия «Родной». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;