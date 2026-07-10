# Criterios de Calidad

## Regla principal

No iniciar piloto con negocios reales hasta que el flujo funcione de extremo a extremo:

- Landing publica.
- Mini pagina funcional.
- Link publico.
- WhatsApp funcional.
- Ubicacion funcional.
- QR funcional.
- Vista movil revisada.
- Presentacion visual profesional.

## Calidad visual

- La mini pagina debe verse moderna, clara y confiable desde celular.
- La informacion debe entenderse sin explicacion.
- Los botones principales deben ser faciles de encontrar y presionar.
- Las fotos no deben romper el layout ni verse descuidadas.
- El catalogo o servicios deben tener jerarquia clara.
- La landing debe comunicar que se ofrece y como solicitarlo rapidamente.

## Calidad funcional

- El slug publico abre la pagina correcta.
- El boton de WhatsApp abre conversacion con mensaje sugerido.
- El boton de ubicacion abre Google Maps o el enlace proporcionado.
- El QR abre la mini pagina correcta.
- El panel permite crear y editar al menos la informacion basica.
- El administrador puede copiar el link publico.
- El negocio puede estar oculto/no publicado si falta informacion.

## Calidad movil

- Texto legible sin zoom.
- Botones con area tactil comoda.
- Navegacion vertical simple.
- Imagenes optimizadas.
- Sin desbordes horizontales.
- Compatible con navegadores internos de WhatsApp y Facebook.
- El hero publico debe mostrar propuesta, subtexto y CTA sin esperar animaciones largas.
- La barra movil fija de mini pagina no debe tapar contenido final.

## Rendimiento inicial

- Carga rapida en celulares.
- Imagenes con tamanos razonables.
- Evitar animaciones pesadas.
- Evitar dependencias innecesarias.
- Usar `next/image` en imagenes publicas cuando sea seguro mantener el diseno.
- Los warnings pendientes de imagenes deben quedar limitados a vistas internas o documentados.

## Seguridad basica

- Panel interno protegido.
- Passwords con hash, nunca texto plano.
- Validar datos antes de guardar.
- No publicar datos no autorizados.
- Separar informacion publica de notas internas.

## Checklist antes del piloto

- [ ] Landing publicada y entendible.
- [ ] Demo publica disponible.
- [ ] Panel interno protegido.
- [ ] Crear negocio funciona.
- [ ] Editar negocio funciona.
- [ ] Agregar servicios/productos funciona.
- [ ] Mini pagina por slug funciona.
- [ ] WhatsApp funciona.
- [ ] Ubicacion funciona.
- [ ] QR funciona.
- [ ] Link copiable funciona.
- [ ] Vista movil revisada.
- [ ] Errores criticos corregidos.
- [ ] Proceso de retroalimentacion definido.
