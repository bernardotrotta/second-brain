## Introduzione

- Esiste un'architettura a stella i cui i componenti gestiscono le comunicazione tra le componenti hardware
- L'architettura di [[Neuemann]] si basa sull'architettura di [[Turing]]

## Classificazione di Flynn

- Era un ingegnere Intel
	- SISD: I dati vengono elaborati uno alla volta secondo un unico algoritmo
	- MISD: Diversi sistemi che elaborano la stessa informazione per avere maggiore tolleranza ai guasti
	- SIMD: Più diffuse, sono core che elaborano un sacco di dati in parallelo sulla stessa operazione
	- MIMD: Più istruzioni eseguite su dati diversi, ogni istruzione è indipendente

## Assembler

> Le istruzioni elementari vengogno eseguite direttamente dalla CPU. Il set di istruzioni viene classificato in 2 macro categorie

- CISC: Complex Instruction Set Computing
- RISC: Reduced Instruction Set Computing: il vantaggio di un set di istruzioni minore è la possibilità di risparmiare spazio in memoria

> I linguaggi assembly sono dei linguaggi mnemonici che vengono tradotti in mapping 1 a 1 in linguaggio macchina