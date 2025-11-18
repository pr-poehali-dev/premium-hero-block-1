import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1QjdBNjQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJ2LTJoLTJ2Mmgyem0wLTJ2LTJoMnYyaC0yem0yIDB2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0tNCAyaDJ2MmgtMnYtMnptMiAydjJoMnYtMmgtMnptMC00aDJ2MmgtMnYtMnptMC0yaDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/2c7f8c31-ad1f-4bb0-b5aa-e2641986ac3e/files/0a319211-2e83-41b4-a2b6-423171d56a66.jpg" 
                alt="Родной"
                className="w-32 h-32 mx-auto mb-8 rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-foreground animate-fade-in-delay-1">
              Дом долголетия<br />
              <span className="font-semibold text-primary">«Родной»</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto animate-fade-in-delay-2">
              Тёплое пространство заботы и долгой жизни
            </p>
            
            <div className="animate-fade-in-delay-3">
              <Button 
                size="lg" 
                className="text-lg px-12 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
                Дом, где забота становится средой жизни
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы создаём пространство, где старшие живут спокойно, красиво и безопасно. 
                Где внимание — не услуга, а состояние дома. Где каждый день проходит так, 
                что на вопрос <span className="font-semibold text-foreground">«Как там?»</span> можно ответить: 
                <span className="font-semibold text-primary"> «Как дом Родной».</span>
              </p>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/2c7f8c31-ad1f-4bb0-b5aa-e2641986ac3e/files/28915116-6cb8-421e-aef9-e387fa389b1f.jpg"
                alt="Уютный интерьер"
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
              Три уровня заботы
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Чтобы поддержка росла вместе с человеком
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-scale-in-delay-1 rounded-3xl overflow-hidden group">
              <CardContent className="p-10 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Home" className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-semibold text-foreground">
                  Активная жизнь
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Просторные апартаменты, мастерские, спокойная безопасность
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-scale-in-delay-2 rounded-3xl overflow-hidden group">
              <CardContent className="p-10 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="HeartHandshake" className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-semibold text-foreground">
                  Усиленная поддержка
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Помощь рядом, регулярное наблюдение, внимание к быту и настроению
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-scale-in-delay-3 rounded-3xl overflow-hidden group">
              <CardContent className="p-10 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Heart" className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-semibold text-foreground">
                  Круглосуточный уход
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Профессиональная забота 24/7, деменция-friendly среда
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light text-foreground">
              Профессиональная медицина.
            </h2>
            <p className="text-3xl font-light text-primary">
              Тёплая человеческая забота.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'Stethoscope', title: 'Гериатрия' },
              { icon: 'UserRound', title: 'Медсёстры 24/7' },
              { icon: 'Brain', title: 'Уход при деменции' },
              { icon: 'Activity', title: 'Реабилитация' },
              { icon: 'Pill', title: 'Лекарственный контроль' }
            ].map((item, index) => (
              <div 
                key={index}
                className={`text-center space-y-4 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={item.icon} className="text-primary" size={40} />
                </div>
                <p className="text-lg font-medium text-foreground">{item.title}</p>
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
                src="https://cdn.poehali.dev/projects/2c7f8c31-ad1f-4bb0-b5aa-e2641986ac3e/files/7865bf72-2aaa-4ec8-a265-7ef77c07fcb1.jpg"
                alt="Столовая"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="space-y-8 animate-slide-up-delay order-1 md:order-2">
              <h2 className="text-5xl md:text-6xl font-light text-foreground">
                Прозрачность для семьи
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: 'FileText', title: 'Ежедневные отчёты', desc: 'О самочувствии, питании, активностях' },
                  { icon: 'Video', title: 'Видеозвонки', desc: 'Общайтесь в удобное время' },
                  { icon: 'Users', title: 'Координатор семьи', desc: 'Личный контакт и поддержка' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-6xl font-light text-foreground">
              Честная структура стоимости
            </h2>
            
            <Card className="bg-background border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-12 space-y-6">
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center py-4 border-b border-border">
                    <span className="text-xl text-muted-foreground">Проживание</span>
                    <span className="text-xl font-semibold text-foreground">Индивидуально</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-border">
                    <span className="text-xl text-muted-foreground">Питание</span>
                    <span className="text-xl font-semibold text-foreground">Включено</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-xl text-muted-foreground">Уровень ухода</span>
                    <span className="text-xl font-semibold text-foreground">По потребностям</span>
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
                Записаться на экскурсию
              </h2>
              <p className="text-xl text-primary-foreground/80 font-light">
                Приезжайте познакомиться с домом и командой
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
                      placeholder="Расскажите немного о ваших потребностях"
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

      <footer className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Дом долголетия «Родной»</h3>
              <p className="text-muted-foreground">
                Тёплое пространство заботы и долгой жизни
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@rodnoy-dom.ru</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Адрес</h4>
              <p className="text-muted-foreground">
                Москва, Рублёвское шоссе
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
