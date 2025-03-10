PGDMP  *                     }            appointmentdb    17.2    17.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16387    appointmentdb    DATABASE     �   CREATE DATABASE appointmentdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE appointmentdb;
                     postgres    false            �            1259    16408    appointment    TABLE     �   CREATE TABLE public.appointment (
    aid integer NOT NULL,
    pid integer,
    sid integer,
    apt_dt timestamp without time zone
);
    DROP TABLE public.appointment;
       public         heap r       postgres    false            �            1259    16388    patients    TABLE     �   CREATE TABLE public.patients (
    pid integer NOT NULL,
    firstname character varying(50),
    lastname character varying(50),
    dob date,
    gender character varying(10),
    address character varying(20),
    phone character varying(20)
);
    DROP TABLE public.patients;
       public         heap r       postgres    false            �            1259    16393    staff    TABLE     j  CREATE TABLE public.staff (
    sid integer NOT NULL,
    firstname character varying(50),
    lastname character varying(50),
    designation character varying(20),
    gender character varying(10),
    address character varying(20),
    phone character varying(20),
    salary integer,
    username character varying(20),
    password character varying(10)
);
    DROP TABLE public.staff;
       public         heap r       postgres    false            �          0    16408    appointment 
   TABLE DATA           <   COPY public.appointment (aid, pid, sid, apt_dt) FROM stdin;
    public               postgres    false    219   �       �          0    16388    patients 
   TABLE DATA           Y   COPY public.patients (pid, firstname, lastname, dob, gender, address, phone) FROM stdin;
    public               postgres    false    217   �       �          0    16393    staff 
   TABLE DATA           z   COPY public.staff (sid, firstname, lastname, designation, gender, address, phone, salary, username, password) FROM stdin;
    public               postgres    false    218   �       c           2606    16412    appointment appointment_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_pkey PRIMARY KEY (aid);
 F   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_pkey;
       public                 postgres    false    219            a           2606    16397    staff doctor_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (sid);
 ;   ALTER TABLE ONLY public.staff DROP CONSTRAINT doctor_pkey;
       public                 postgres    false    218            _           2606    16392    patients patients_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (pid);
 @   ALTER TABLE ONLY public.patients DROP CONSTRAINT patients_pkey;
       public                 postgres    false    217            d           2606    16418     appointment appointment_pid_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_pid_fkey FOREIGN KEY (pid) REFERENCES public.patients(pid);
 J   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_pid_fkey;
       public               postgres    false    219    4703    217            e           2606    16413     appointment appointment_sid_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_sid_fkey FOREIGN KEY (sid) REFERENCES public.staff(sid);
 J   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_sid_fkey;
       public               postgres    false    4705    218    219            �      x������ � �      �      x������ � �      �      x������ � �     