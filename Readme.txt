******* What's in this package ? ******

An modified version of the zxcvbn.js build with compressed frequency list in order to reduze its total size.


****** Testing the new compressed package ******

The test consist os running the zxcvbn() call against a set of 4190 passwords.
For each password, the score is stored into a list and then we generate some statistics
over the score results.

Below there is the output for running the script using the original version from
github. 

########################################
Min: 0
Max: 4
mean: 0.7122493355883064
median: 1
mode: 1
variance: 0.20978230458700065
standard deviation: 0.45801998273765376
sample standard deviation: 0.4580753225533257
85th percentile: 1
histogram: {
  values: [
    1198, 0, 2936, 0,
       4, 0,    0, 0,
       0, 1
  ],
  bins: 10,
  binWidth: 0.42000000000000004,
  binLimits: [ -0.10000000000000009, 4.1 ]
}
#################################################

The main data above is the histogram for the scores.


******* How to run tests *******

Install 'stats-lite' and 'readline' npm packages.

There are two scripts on base root folder:

run_original.sh 
This script is going to run the original version from github

run_compressed.sh 
This script is going to run the compressed version of the javascript package.

The result from each script is the score statistics againt an password set.

******* Current issues **********

When you run the compressed package here are the stats output

Min: 0
Max: 4
mean: 1.0550857695095435
median: 1
mode: 1
variance: 0.11873410112389367
standard deviation: 0.3445781495160331
sample standard deviation: 0.34461978283335004
85th percentile: 1
histogram: {
  values: [
    128, 0, 3664, 0,
    339, 0,    0, 7,
      0, 1
  ],
  bins: 10,
  binWidth: 0.42000000000000004,
  binLimits: [ -0.10000000000000009, 4.1 ]
}

You can see at the histogram that its not evaluating 1k passwords at the minimum score.
Thats because on compression we are losing some words. 
I guess its due to some non alphanumeric characters from some words at the frequency lists.
It would require some further investigation to resolve this problem.

I also did not minify the resulting javascript file. 

****** Performance notes ******

The frequency list is encoded and the decode is done once at the code load.
It run fast on desktop but it would require further evaluation on mobile devices to verify if its feasible.







