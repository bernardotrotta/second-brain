Un’implementazione semplice di un nemico che insegue il personaggio può basarsi sulla distanza tra il nemico e il giocatore, utilizzando un movimento “graduale” nella direzione del giocatore. Di seguito ti mostro un’idea di come puoi implementare questa funzionalità in Pygame.

**Logica del movimento del nemico:**

L’idea è di calcolare la differenza tra la posizione del nemico e quella del giocatore (in termini di coordinate x e y) e muovere il nemico verso il giocatore a ogni frame. Si può usare un semplice approccio vettoriale per fare in modo che il nemico si muova gradualmente verso il giocatore.

**Codice di esempio:**

```python

import pygame
import math

# Inizializza Pygame
pygame.init()

# Imposta dimensioni dello schermo
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))

# Classe per l'oggetto giocatore
class Player:
    def __init__(self, x, y, width, height, color):
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.color = color
        self.speed = 5

    def move(self):
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            self.x -= self.speed
        if keys[pygame.K_RIGHT]:
            self.x += self.speed
        if keys[pygame.K_UP]:
            self.y -= self.speed
        if keys[pygame.K_DOWN]:
            self.y += self.speed

    def draw(self, screen):
        pygame.draw.rect(screen, self.color, (self.x, self.y, self.width, self.height))

# Classe per il nemico
class Enemy:
    def __init__(self, x, y, width, height, color, speed):
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.color = color
        self.speed = speed

    def move_towards_player(self, player):
        # Calcola la differenza nelle posizioni (vettore direzione)
        dir_x = player.x - self.x
        dir_y = player.y - self.y

        # Calcola la lunghezza del vettore (distanza tra nemico e giocatore)
        distance = math.hypot(dir_x, dir_y)

        # Normalizza il vettore direzione e moltiplica per la velocità
        if distance != 0:
            dir_x /= distance
            dir_y /= distance

        # Muove il nemico verso il giocatore
        self.x += dir_x * self.speed
        self.y += dir_y * self.speed

    def draw(self, screen):
        pygame.draw.rect(screen, self.color, (self.x, self.y, self.width, self.height))


# Inizializza il giocatore e il nemico
player = Player(100, 100, 50, 50, (0, 0, 255))
enemy = Enemy(400, 300, 50, 50, (255, 0, 0), 2)

# Loop principale del gioco
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Movimento del giocatore
    player.move()

    # Movimento del nemico verso il giocatore
    enemy.move_towards_player(player)

    # Riempie lo schermo di bianco
    screen.fill((255, 255, 255))

    # Disegna il giocatore e il nemico
    player.draw(screen)
    enemy.draw(screen)

    # Aggiorna lo schermo
    pygame.display.flip()

    # Limita il framerate
    pygame.time.Clock().tick(60)

# Chiude Pygame
pygame.quit()

```