
import React, { useState } from 'react';
import { MessageCircle, Hash, X, Clock, Users } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

// Mock data - em produção viria do backend
const mockConversations = [
  {
    id: 1,
    title: "Dúvida sobre instalação de split",
    type: "conversation",
    lastMessage: "Obrigado pela ajuda!",
    timestamp: "2 min atrás",
    unread: 2,
    participants: 3
  },
  {
    id: 2,
    title: "Fórum: Refrigeração Industrial",
    type: "forum",
    lastMessage: "Nova discussão sobre gases...",
    timestamp: "15 min atrás",
    unread: 0,
    participants: 12
  },
  {
    id: 3,
    title: "Problema com CLP Siemens",
    type: "conversation",
    lastMessage: "Vou testar essa solução",
    timestamp: "1h atrás",
    unread: 1,
    participants: 2
  },
  {
    id: 4,
    title: "Fórum: Automação Industrial",
    type: "forum",
    lastMessage: "Discussão sobre protocolos...",
    timestamp: "2h atrás",
    unread: 5,
    participants: 8
  }
];

interface ConversationsWidgetProps {
  isLoggedIn?: boolean;
}

export const ConversationsWidget: React.FC<ConversationsWidgetProps> = ({ 
  isLoggedIn = true // Mock - em produção viria do contexto de auth
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isLoggedIn) return null;

  const totalUnread = mockConversations.reduce((total, conv) => total + conv.unread, 0);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-5 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
            <MessageCircle className="h-8 w-8" />
            {totalUnread > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-7 w-7 p-0 flex items-center justify-center text-sm font-medium"
              >
                {totalUnread > 9 ? '9+' : totalUnread}
              </Badge>
            )}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-background text-foreground px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-sm font-medium">
              Conversas & Fóruns
            </div>
          </button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[450px] sm:w-[600px] p-0">
          <div className="p-6 border-b">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3 text-xl">
                <MessageCircle className="h-6 w-6" />
                Minhas Conversas & Fóruns
              </SheetTitle>
            </SheetHeader>
          </div>

          <ScrollArea className="h-[calc(100vh-120px)]">
            <div className="p-6 space-y-4">
              {mockConversations.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      {item.type === 'forum' ? (
                        <Hash className="h-6 w-6 text-primary" />
                      ) : (
                        <MessageCircle className="h-6 w-6 text-blue-600" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h4 className="font-semibold text-base truncate">
                          {item.title}
                        </h4>
                        {item.unread > 0 && (
                          <Badge variant="secondary" className="h-6 px-3 text-sm font-medium">
                            {item.unread}
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {item.lastMessage}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {item.timestamp}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {item.participants}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < mockConversations.length - 1 && (
                    <Separator className="my-3" />
                  )}
                </div>
              ))}
            </div>

            {mockConversations.length === 0 && (
              <div className="text-center py-16 px-6">
                <MessageCircle className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h3 className="font-semibold text-xl mb-3">Nenhuma conversa ainda</h3>
                <p className="text-muted-foreground text-base">
                  Comece participando dos fóruns ou inicie uma conversa!
                </p>
              </div>
            )}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};
