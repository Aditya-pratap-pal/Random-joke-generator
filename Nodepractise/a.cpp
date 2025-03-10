#include <bits/stdc++.h>
using namespace std;

bool isAlternatingBinaryString(string s, int n) {
    for (int i = 1; i < n; i++) {
        if (s[i] == s[i - 1]) {
            return false;
        }
    }
    return true;
}

int main() {
	// your code goes here
	int t;cin>>t;
	while(t--){
	    string s;cin>>s;
	    int n=s.length();
	    bool flag=isAlternatingBinaryString(s,n);
	    if(flag){
	        cout<<0<<endl;
	    }
	    else{
	        int one=0,zero=0;
    	    for(int i=0;i<n;i++){
    	        if(s[i]=='1')one++;
    	        else zero++;
    	    }
    	    int diff=abs(one-zero);
    	    if(diff==0 || diff==1){
    	        cout<<1<<endl;
    	    }
    	    else if(diff==2){
    	        cout<<2<<endl;
    	    }
    	    else{
    	        cout<<3<<endl;
    	    }
	    }
	}

}


