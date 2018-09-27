function mostraMaior(a,b,c){
    if((a==b)&&(b==c))
        return a;
    else if (a>b && b>c)
        return a;
    else if (a>b && c>b)
        return a;
    else if (b>a && a>c)
        return b;
    else if (b>a && c>a)
        return b;
    else if (c>a && a>b)
        return c;
    else 
        return c;
}

