## Raddrizzatori

### Raddrizzatore a Singola Semi-onda

#### Tensione in Ingresso

$$
v_{s} = v_{i}=V_{m}\sin (\omega t)
$$

#### Tensione

$$
\begin{align}
V_{u_{0}} &=\frac{1}{T}\int_{0}^{\frac{T}{2}}V_{m}\sin (\omega t) \, dt \\
&= \frac{1}{2\pi}\int_{0}^\pi V_{m}\sin(\alpha)\,d\alpha \\
&= \frac{V_{m}}{2\pi}\int_{0}^\pi (\sin \alpha) \,d\alpha \\
&= \frac{V_{m}}{2\pi}[-\cos(\pi)+\cos(0)] \\
&= \frac{V_{m}}{2\pi}[-(-1)+1] \\
&= \frac{V_{m}}{\not2\pi}\not2 \\
&=\frac{V_{m}}{\pi} \tag{1} \\
\end{align}
$$

#### Corrente

$$
\begin{align}
V =Ri \implies i&=\frac{V}{R} \\
i=\frac{\frac{V_{m}}{\pi}}{R} \\
=\frac{V_{m}}{\pi R_{L}} 
\end{align}
$$

#### Tensione Efficace

$$
\begin{align}
V_{u_{RMS}}&=\sqrt{ \frac{1}{T}\int _{0}^{T} v_{u}^2(t) \, dt  } \\
&= \sqrt{ \frac{1}{T}\int _{0}^{\frac{T}{2}} (V_{m}\sin \omega t) ^2 \, dt  } \\
&= \sqrt{ \frac{1}{2\pi}\int_{0} ^{\pi}(V_{m} \sin \alpha)^2 \, d\alpha} \\
&= \sqrt{ \frac{1}{2\pi}\int_{0} ^{\pi} V^2_{m} \sin^2 \alpha \, d\alpha} \\
&= \sqrt{ \frac{1}{2\pi}\int_{0} ^{\pi} V^2_{m} \sin^2 \alpha \, d\alpha} \\
&= \sqrt{ \frac{V_{m}^2}{2\pi}\int _{0} ^\pi \sin^2\alpha \, d\alpha  }  \\
&= \sqrt{ \frac{V_{m}^2}{2\pi} \frac{\pi}{2} } \\
&= \sqrt{ \frac{V^2_{m}}{4} } \\
&= \frac{V_{m}}{2} \tag{3}
\end{align}
$$

#### Corrente Efficace

$$
I_{u_{RMS}} = \frac{V_{m}}{2R_{L}}
$$

#### Efficienza

$$
\begin{align}
\eta_{R} &= \frac{P_{u_{0}}}{P_{u_{RMS}}} \\
&= \frac{V_{u_{0}}I_{u_{0}}}{V_{u_{RMS}}I_{u_{RMS}}} \\
&= \frac{\frac{V_{m}}{\pi} \frac{V_{m}}{\pi R_{L}}}{\frac{V_{m}}{2} \frac{V_{m}}{2R_{L}}} \\
&= \frac{2V_{m}}{\pi^2 R_{L}} \frac{4R_{L}}{2V_{m}} \\
&= \frac{4}{\pi^2} \\
&\approx 0,4

\end{align} 
$$

### Raddrizzatore a Onda Intera

#### Tensione

#### Corrente

#### Tensione Efficace

#### Corrente Efficace

#### Efficienza