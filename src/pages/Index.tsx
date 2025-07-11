import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { LoginSheet } from "@/components/LoginSheet";
import { ConversationsWidget } from "@/components/ConversationsWidget";
import { 
  ArrowRight, 
  CheckCircle, 
  MessageCircle, 
  Users, 
  BookOpen, 
  Search,
  TrendingUp,
  Wrench,
  Building,
  Cpu,
  Truck,
  Factory,
  Hammer,
  FlaskConical,
  Plane,
  Lightbulb,
  Brain,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Settings,
  BarChart3,
  FileText,
  Rocket,
  Thermometer
} from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-primary">Crescitec</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#areas" className="text-foreground hover:text-primary transition-colors">Áreas</a>
            <a href="#forum" className="text-foreground hover:text-primary transition-colors">Fórum</a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
          </div>
          <LoginSheet />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Comunidade
              </span> dos Engenheiros do Brasil
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Conecte-se, compartilhe conhecimento e tire suas dúvidas com engenheiros de todo o país
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Explorar Fóruns
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                Criar Conta
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <MessageCircle className="text-white" size={24} />
          </div>
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Users className="text-white" size={28} />
          </div>
        </div>
      </section>

      {/* Sobre a Plataforma */}
      <section id="sobre" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Sobre a Crescitec
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              A Comunidade que <span className="text-primary">Une</span> Engenheiros
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Uma plataforma criada por engenheiros, para engenheiros. Conectamos profissionais 
              de todo o Brasil para compartilhar conhecimento e resolver desafios técnicos.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center animate-slide-in-right">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fóruns Especializados</h3>
                <p className="text-muted-foreground">
                  Discussões técnicas organizadas por área de engenharia para troca eficiente
                </p>
              </div>

              <div className="flex flex-col items-center text-center animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rede Nacional de Profissionais</h3>
                <p className="text-muted-foreground">
                  Conecte-se com engenheiros experientes de todas as regiões do Brasil
                </p>
              </div>

              <div className="flex flex-col items-center text-center animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Conhecimento Compartilhado</h3>
                <p className="text-muted-foreground">
                  Base de conhecimento em constante crescimento com soluções práticas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Engenharia */}
      <section id="areas" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Áreas de Engenharia
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fóruns <span className="text-primary">Especializados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Participe de discussões técnicas organizadas por área de conhecimento
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Building className="text-primary" size={32} />
                </div>
                <CardTitle className="text-lg">Engenharia Civil</CardTitle>
                <CardDescription>
                  Estruturas, construção, urbanismo e infraestrutura
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>1.2k membros</span>
                  <span>342 discussões</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Wrench className="text-primary" size={32} />
                </div>
                <CardTitle className="text-lg">Engenharia Mecânica</CardTitle>
                <CardDescription>
                  Máquinas, motores, termodinâmica e projetos mecânicos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>986 membros</span>
                  <span>278 discussões</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Cpu className="text-primary" size={32} />
                </div>
                <CardTitle className="text-lg">Engenharia Elétrica</CardTitle>
                <CardDescription>
                  Circuitos, eletrônica, energia e automação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>754 membros</span>
                  <span>189 discussões</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <FlaskConical className="text-primary" size={32} />
                </div>
                <CardTitle className="text-lg">Engenharia Química</CardTitle>
                <CardDescription>
                  Processos químicos, petroquímica e biotecnologia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>623 membros</span>
                  <span>156 discussões</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Factory className="text-primary" size={32} />
                </div>
                <CardTitle className="text-lg">Engenharia de Produção</CardTitle>
                <CardDescription>
                  Processos, qualidade, logística e gestão
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>892 membros</span>
                  <span>234 discussões</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Plane className="text-primary" size={32} />
                </div>
                <CardTitle className="text-lg">Engenharia Aeroespacial</CardTitle>
                <CardDescription>
                  Aeronaves, sistemas aeroespaciais e propulsão
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>456 membros</span>
                  <span>89 discussões</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Truck className="text-primary" size={32} />
                </div>
                <CardTitle className="text-lg">Engenharia de Transportes</CardTitle>
                <CardDescription>
                  Trânsito, logística e infraestrutura viária
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>378 membros</span>
                  <span>67 discussões</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Hammer className="text-primary" size={32} />
                </div>
                <CardTitle className="text-lg">Outras Áreas</CardTitle>
                <CardDescription>
                  Ambiental, naval, metalúrgica e outras especialidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>567 membros</span>
                  <span>123 discussões</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Áreas Técnicas Atendidas */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              ÁREAS TÉCNICAS ATENDIDAS
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Veja as áreas de suporte e troca de conhecimento oferecidas pela nossa comunidade técnica.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-primary-foreground text-primary border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Thermometer className="text-primary-foreground" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">REFRIGERAÇÃO E CLIMATIZAÇÃO</h3>
                <div className="w-12 h-1 bg-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground leading-relaxed">
                  Instalação, manutenção e diagnóstico de sistemas de refrigeração. Suporte técnico sobre gases, pressão, componentes e eficiência.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground text-primary border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="text-primary-foreground" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">AUTOMAÇÃO INDUSTRIAL</h3>
                <div className="w-12 h-1 bg-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground leading-relaxed">
                  Suporte em CLPs, sensores, IHMs e redes industriais. Compartilhe e resolva dúvidas sobre programação, controle e automação de processos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground text-primary border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="text-primary-foreground" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">MECÂNICA INDUSTRIAL</h3>
                <div className="w-12 h-1 bg-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground leading-relaxed">
                  Apoio técnico em montagem, manutenção e ajustes de máquinas e equipamentos industriais. Troca de experiências sobre sistemas mecânicos e hidráulicos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground text-primary border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="text-primary-foreground" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">ELÉTRICA PREDIAL E INDUSTRIAL</h3>
                <div className="w-12 h-1 bg-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground leading-relaxed">
                  Discussões técnicas sobre instalações, comandos elétricos, painéis, normas e segurança. Soluções práticas para falhas e projetos elétricos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground text-primary border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cpu className="text-primary-foreground" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">TÉCNICO EM ELETRÔNICA</h3>
                <div className="w-12 h-1 bg-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground leading-relaxed">
                  Transformamos circuitos em soluções! Instalação, manutenção e inovação com precisão e eficiência.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground text-primary border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-dashed border-primary">
                  <Lightbulb className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">NOVA ESPECIALIDADE</h3>
                <div className="w-12 h-1 bg-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground leading-relaxed">
                  Espaço reservado para futuras especialidades técnicas que serão adicionadas conforme a demanda da comunidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona o Fórum */}
      <section id="forum" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Como Participar
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Como Funciona a <span className="text-primary">Plataforma</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo simples para conectar engenheiros e compartilhar conhecimento
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Users className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Cadastre-se</h3>
              <p className="text-muted-foreground">
                Crie sua conta gratuita informando sua área de atuação e experiência profissional
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Search className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Explore Fóruns</h3>
              <p className="text-muted-foreground">
                Navegue pelos fóruns especializados da sua área e encontre discussões relevantes
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <MessageCircle className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Participe</h3>
              <p className="text-muted-foreground">
                Faça perguntas, responda dúvidas e compartilhe sua experiência com a comunidade
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <BookOpen className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">4. Aprenda</h3>
              <p className="text-muted-foreground">
                Construa conhecimento colaborativo e desenvolva sua carreira profissional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos de Engenheiros */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Depoimentos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que os <span className="text-primary">Engenheiros</span> Dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Building className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ana Silva</h4>
                    <p className="text-sm text-muted-foreground">Engenheira Civil - SP</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "A Crescitec me conectou com engenheiros experientes que me ajudaram a resolver 
                  um problema complexo de estruturas. A qualidade das discussões é excepcional."
                </p>
                <div className="flex space-x-4">
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    ⭐ Excelente
                  </Badge>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    5 anos de experiência
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Wrench className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Carlos Santos</h4>
                    <p className="text-sm text-muted-foreground">Engenheiro Mecânico - RJ</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Participo da plataforma há 2 anos e já ajudei dezenas de colegas. É gratificante 
                  ver a comunidade crescendo e o conhecimento sendo compartilhado."
                </p>
                <div className="flex space-x-4">
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    💡 Top Contribuidor
                  </Badge>
                  <Badge variant="outline" className="text-purple-600 border-purple-200">
                    15 anos de experiência
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA / Contato */}
      <section id="contato" className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Fazer Parte da Comunidade?
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              Junte-se a milhares de engenheiros brasileiros que já fazem parte da maior 
              rede de conhecimento técnico do país.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-4 text-blue-200" size={20} />
                    <span>(11) 9999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-4 text-blue-200" size={20} />
                    <span>contato@crescitec.com.br</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4 text-blue-200" size={20} />
                    <span>Todo o Brasil</span>
                  </div>
                </div>
                
                <Button variant="hero" size="lg" className="mt-8">
                  <MessageCircle className="mr-2" />
                  Criar Conta Gratuita
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>
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
                    <Label htmlFor="area" className="text-white">Área de Engenharia</Label>
                    <Input id="area" placeholder="Ex: Civil, Mecânica, Elétrica..." className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white">Mensagem</Label>
                    <Textarea id="message" placeholder="Como podemos ajudar?" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
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
              <h3 className="text-xl font-bold mb-4">Crescitec</h3>
              <p className="text-primary-foreground/80 mb-4">
                Conectando engenheiros de todo o Brasil para compartilhar conhecimento e resolver desafios técnicos.
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
                <li><a href="#home" className="hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre</a></li>
                <li><a href="#areas" className="hover:text-primary-foreground transition-colors">Áreas</a></li>
                <li><a href="#forum" className="hover:text-primary-foreground transition-colors">Fórum</a></li>
                <li><a href="#contato" className="hover:text-primary-foreground transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Áreas Principais</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Eng. Civil</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Eng. Mecânica</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Eng. Elétrica</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Eng. Química</a></li>
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
                  contato@crescitec.com.br
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  Todo o Brasil
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2024 Crescitec. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Widget de Conversas */}
      <ConversationsWidget />
    </div>
  );
};

export default Index;