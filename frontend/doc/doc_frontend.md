# 📘 Documentación Frontend - Club de Running 🏃‍♂️

## 1. Información General

**Proyecto:** Página Web de Membresías para Club de Running  
**Frontend:** React + TypeScript + Vite  
**Backend:** NestJS  
**Base de Datos:** PostgreSQL  
**Autores:** Vidondo y Villanueva

---

## 2. Estructura del Proyecto

```bash
/src
  /components      # Componentes reutilizables
  /pages           # Vistas principales (Home, Perfil, Membresías)
  /hooks           # Hooks personalizados (useAuth, useForm)
  /types           # Tipado general (interfaces)
  App.tsx
  main.tsx


 3. DIVISON POR ROLES

    ROL: ADMINISTRADOR

    - ARCHIVOS:
        1. DFSSA
            - Funciones:
                handleUpload(): Sube imagen.
                handleSubmit(): Valida y envía al backend (por conectar).
            
            - Relación:
                . Esta página será accedida desde `/cliente/pago`.
                . Se conectará con el endpoint POST `/api/voucher`.


    ROL: CLIENTE

    - ARCHIVOS:
        1. DFSSA
            - Funciones:
                handleUpload(): Sube imagen.
                handleSubmit(): Valida y envía al backend (por conectar).
            
            - Relación:
                . Esta página será accedida desde `/cliente/pago`.
                . Se conectará con el endpoint POST `/api/voucher`.

    ROL: EMPRESA

    - ARCHIVOS:
        1. DFSSA
            - Funciones:
                handleUpload(): Sube imagen.
                handleSubmit(): Valida y envía al backend (por conectar).
            
            - Relación:
                . Esta página será accedida desde `/cliente/pago`.
                . Se conectará con el endpoint POST `/api/voucher`.

 
    ROL: TODOS

    - ARCHIVOS:
        1. DFSSA
            - Funciones:
                handleUpload(): Sube imagen.
                handleSubmit(): Valida y envía al backend (por conectar).
            
            - Relación:
                . Esta página será accedida desde `/cliente/pago`.
                . Se conectará con el endpoint POST `/api/voucher`.

        







