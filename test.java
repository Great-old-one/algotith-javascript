import java.util.Scanner;

public class Main {
    public static void main(String [] args)
    {
        Scanner in =new Scanner(System.in);
        String str=in.next();
        char []arr=str.toCharArray();
        int length=arr.length;
        if('a'<=arr[0]&&arr[0]<='z')
        {
            arr[0]=(char)((int)arr[0]-32);
        }
        for(int i=1;i<length;i++)
        {
            if(arr[i]=='_')
            {
                arr[i]=(char)((int)arr[i+1]-32);
                for(int j=i+1;j<length-1;j++)
                {
                    arr[j]=arr[j+1];
                }
                arr[length-1]='\0';
                length--;
            }
        }
        for(int i=0;i<arr.length;i++)
        {
            System.out.print(arr[i]);
        }
    }
}
