import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight, 
  CheckCircle, 
  Settings, 
  Brain, 
  TrendingUp, 
  BarChart3,
  Lightbulb,
  Cpu,
  Database,
  Search,
  FileText,
  Rocket,
  Users,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Consultoria que 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Transforma
              </span> 
              sua Empresa
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Soluções sob medida em tecnologia, inovação e eficiência operacional 
              para acelerar o crescimento do seu negócio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Saiba Mais
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Brain className="text-white" size={24} />
          </div>
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <TrendingUp className="text-white" size={28} />
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Sobre Nós
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Transformação Digital <span className="text-primary">Sob Medida</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Somos especialistas em criar soluções tecnológicas personalizadas que impulsionam 
              a inovação e maximizam a eficiência operacional da sua empresa.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center animate-slide-in-right">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Settings className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Assessoria em Transformação Digital</h3>
                <p className="text-muted-foreground">
                  Estratégias personalizadas para modernizar processos e tecnologias
                </p>
              </div>

              <div className="flex flex-col items-center text-center animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Cpu className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementação de Automações e IA</h3>
                <p className="text-muted-foreground">
                  Soluções inteligentes para otimizar operações e reduzir custos
                </p>
              </div>

              <div className="flex flex-col items-center text-center animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Foco em Resultados e ROI</h3>
                <p className="text-muted-foreground">
                  Métricas claras e acompanhamento contínuo do retorno sobre investimento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Áreas de <span className="text-primary">Atuação</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços para acelerar sua transformação digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">Consultoria em Inovação e Transformação Digital</CardTitle>
                <CardDescription>
                  Análise estratégica completa e roadmap personalizado para modernização tecnológica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Diagnóstico de maturidade digital
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Estratégia de transformação
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Roadmap de implementação
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Settings className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">Automação de Processos e Integrações com IA</CardTitle>
                <CardDescription>
                  Implementação de soluções inteligentes para otimizar operações e reduzir custos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Automação de workflows
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Integração de sistemas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Implementação de IA
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Cpu className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">Desenvolvimento de Soluções Personalizadas</CardTitle>
                <CardDescription>
                  Criação de software e aplicações sob medida para necessidades específicas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Desenvolvimento web e mobile
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    APIs e microserviços
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Sistemas enterprise
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">Análise de Dados e Performance Operacional</CardTitle>
                <CardDescription>
                  Business Intelligence e analytics para tomada de decisão estratégica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Dashboards e relatórios
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Análise preditiva
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    KPIs e métricas
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Metodologia
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Como <span className="text-primary">Funciona</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa abordagem estruturada garante resultados efetivos e sustentáveis
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Search className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Diagnóstico</h3>
              <p className="text-muted-foreground">
                Análise completa da situação atual, identificação de oportunidades e definição de objetivos
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <FileText className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Proposta Personalizada</h3>
              <p className="text-muted-foreground">
                Desenvolvimento de estratégia sob medida com cronograma, recursos e investimento necessário
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Rocket className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Implementação</h3>
              <p className="text-muted-foreground">
                Execução das soluções com acompanhamento próximo e ajustes conforme necessário
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <TrendingUp className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">4. Acompanhamento</h3>
              <p className="text-muted-foreground">
                Monitoramento contínuo de resultados, otimizações e suporte técnico especializado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Cases de Sucesso
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Resultados que <span className="text-primary">Transformam</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Empresa de Manufatura</h4>
                    <p className="text-sm text-muted-foreground">Setor Industrial</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "A implementação da automação de processos resultou em 40% de redução de custos 
                  operacionais e 60% de aumento na eficiência produtiva."
                </p>
                <div className="flex space-x-4">
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    40% ↓ Custos
                  </Badge>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    60% ↑ Eficiência
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <BarChart3 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Empresa de Varejo</h4>
                    <p className="text-sm text-muted-foreground">Setor Comercial</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Com a análise de dados implementada, conseguimos identificar oportunidades que 
                  geraram 35% de aumento nas vendas em apenas 6 meses."
                </p>
                <div className="flex space-x-4">
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    35% ↑ Vendas
                  </Badge>
                  <Badge variant="outline" className="text-purple-600 border-purple-200">
                    6 meses ROI
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA / Contato */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Transformar sua Empresa?
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              Converse com nossos especialistas e descubra como podemos acelerar 
              o crescimento do seu negócio através da inovação tecnológica.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-4 text-blue-200" size={20} />
                    <span>(11) 9999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-4 text-blue-200" size={20} />
                    <span>contato@consultoria.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4 text-blue-200" size={20} />
                    <span>São Paulo, SP - Brasil</span>
                  </div>
                </div>
                
                <Button variant="hero" size="lg" className="mt-8">
                  <Users className="mr-2" />
                  Agendar Consulta Gratuita
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6">Solicite uma Proposta</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Nome</Label>
                      <Input id="name" placeholder="Seu nome" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-white">Empresa</Label>
                    <Input id="company" placeholder="Nome da empresa" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white">Mensagem</Label>
                    <Textarea id="message" placeholder="Conte-nos sobre seu projeto..." className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                  </div>
                  <Button variant="cta" size="lg" className="w-full">
                    Enviar Mensagem
                    <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Consultoria Tech</h3>
              <p className="text-primary-foreground/80 mb-4">
                Transformando empresas através da inovação tecnológica e soluções personalizadas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Consultoria Digital</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Automação</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Desenvolvimento</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Analytics</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  (11) 9999-9999
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  contato@consultoria.com
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  São Paulo, SP
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2024 Consultoria Tech. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;