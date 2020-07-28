Search.setIndex({docnames:["I01_start","I02_overview","I03_usenotes","analysis","base","file_io","index","utils","visualization"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":2,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["I01_start.rst","I02_overview.rst","I03_usenotes.rst","analysis.rst","base.rst","file_io.rst","index.rst","utils.rst","visualization.rst"],objects:{"mpes.analysis":{BoundedArea:[3,1,1,""],EnergyCalibrator:[3,1,1,""],Model:[3,1,1,""],MomentumCorrector:[3,1,1,""],applyWarping:[3,3,1,""],apply_mask_along:[3,3,1,""],bandpath_map:[3,3,1,""],blocknorm:[3,3,1,""],bootstrapfit:[3,3,1,""],build_dynamic_matrix:[3,3,1,""],calibrateE:[3,3,1,""],calibrateK:[3,3,1,""],circmask:[3,3,1,""],curvature2d:[3,3,1,""],func_add:[3,3,1,""],func_update:[3,3,1,""],gaussian:[3,3,1,""],gradn:[3,3,1,""],image_interpolator:[3,3,1,""],interp_slice:[3,3,1,""],line_generator:[3,3,1,""],peakdetect1d:[3,3,1,""],peakdetect2d:[3,3,1,""],peaksearch:[3,3,1,""],perspectiveWarping:[3,3,1,""],points2path:[3,3,1,""],rangeConvert:[3,3,1,""],rectmask:[3,3,1,""],regionExpand:[3,3,1,""],ridgeDetect:[3,3,1,""],segment2d:[3,3,1,""],shirley2d:[3,3,1,""],shirley:[3,3,1,""],vertexGenerator:[3,3,1,""],voigt:[3,3,1,""]},"mpes.analysis.BoundedArea":{mask:[3,2,1,""],setBoundary:[3,2,1,""],subgrid:[3,2,1,""],toMask:[3,2,1,""],view:[3,2,1,""]},"mpes.analysis.EnergyCalibrator":{addFeatures:[3,2,1,""],calibrate:[3,2,1,""],dup:[3,2,1,""],featureExtract:[3,2,1,""],findCorrespondence:[3,2,1,""],nfiles:[3,2,1,""],normalize:[3,2,1,""],nranges:[3,2,1,""],ntraces:[3,2,1,""],read:[3,2,1,""],saveParameters:[3,2,1,""],view:[3,2,1,""]},"mpes.analysis.Model":{fit:[3,2,1,""],model_eval:[3,2,1,""],normalize:[3,2,1,""],partial_eval:[3,2,1,""]},"mpes.analysis.MomentumCorrector":{applyDeformation:[3,2,1,""],calcGeometricDistances:[3,2,1,""],calcSymmetryScores:[3,2,1,""],calibrate:[3,2,1,""],coordinateTransform:[3,2,1,""],correct:[3,2,1,""],featureExtract:[3,2,1,""],features:[3,2,1,""],getWarpFunction:[3,2,1,""],importBinningParameters:[3,2,1,""],intensityTransform:[3,2,1,""],linWarpEstimate:[3,2,1,""],resetDeformation:[3,2,1,""],rotate:[3,2,1,""],saveImage:[3,2,1,""],saveParameters:[3,2,1,""],selectSlice2D:[3,2,1,""],splineWarpEstimate:[3,2,1,""],symscores:[3,2,1,""],transform:[3,2,1,""],update:[3,2,1,""],updateDeformation:[3,2,1,""],view:[3,2,1,""]},"mpes.base":{FileCollection:[4,1,1,""],MapParser:[4,1,1,""],correctnd:[4,3,1,""],detrc2krc:[4,3,1,""],detxy2kxy:[4,3,1,""],dfieldapply:[4,3,1,""],generateDfield:[4,3,1,""],imrc2krc:[4,3,1,""],imxy2kxy:[4,3,1,""],loadClassAttributes:[4,3,1,""],mapping:[4,3,1,""],perspectiveTransform:[4,3,1,""],reshape2d:[4,3,1,""],saveClassAttributes:[4,3,1,""],tof2evpoly:[4,3,1,""]},"mpes.base.FileCollection":{fileID:[4,2,1,""],filter:[4,2,1,""],gather:[4,2,1,""],nallfiles:[4,2,1,""],nfiles:[4,2,1,""],select:[4,2,1,""]},"mpes.base.MapParser":{EMap:[4,2,1,""],Efile:[4,2,1,""],bfile:[4,2,1,""],kMap:[4,2,1,""],kfile:[4,2,1,""],listfind:[4,2,1,""],mapConstruct:[4,2,1,""],parse:[4,2,1,""],parse_Emap:[4,2,1,""],parse_bfile:[4,2,1,""],parse_kmap:[4,2,1,""],parse_wmap:[4,2,1,""],wMap:[4,2,1,""]},"mpes.fprocessing":{applyJitter:[5,3,1,""],binDataframe:[5,3,1,""],binDataframe_fast:[5,3,1,""],binDataframe_lean:[5,3,1,""],binDataframe_numba:[5,3,1,""],binPartition:[5,3,1,""],binPartition_numba:[5,3,1,""],dataframeProcessor:[5,1,1,""],extractEDC:[5,3,1,""],hdf5Processor:[5,1,1,""],hdf5Reader:[5,1,1,""],hdf5Splitter:[5,1,1,""],im2mat:[5,3,1,""],mat2im:[5,3,1,""],metaReadHDF5:[5,3,1,""],numba_histogramdd:[5,3,1,""],parallelHDF5Processor:[5,1,1,""],parquetProcessor:[5,1,1,""],readARPEStxt:[5,3,1,""],readBinnedhdf5:[5,3,1,""],readDataframe:[5,3,1,""],readIgorBinFile:[5,3,1,""],readimg:[5,3,1,""],readtsv:[5,3,1,""],rot2d:[5,3,1,""],saveDict:[5,3,1,""],sgfltr2d:[5,3,1,""],sortNamesBy:[5,3,1,""],txtlocate:[5,3,1,""]},"mpes.fprocessing.dataframeProcessor":{appendColumn:[5,2,1,""],appendEAxis:[5,2,1,""],appendKAxis:[5,2,1,""],appendMarker:[5,2,1,""],appendRow:[5,2,1,""],applyECorrection:[5,2,1,""],applyFilter:[5,2,1,""],applyKCorrection:[5,2,1,""],columnApply:[5,2,1,""],convert:[5,2,1,""],deleteColumn:[5,2,1,""],distributedBinning:[5,2,1,""],getCountRate:[5,2,1,""],getElapsedTime:[5,2,1,""],mapColumn:[5,2,1,""],ncol:[5,2,1,""],nrow:[5,2,1,""],read:[5,2,1,""],saveHistogram:[5,2,1,""],toBandStructure:[5,2,1,""],transformColumn2D:[5,2,1,""],transformColumn:[5,2,1,""],viewEventHistogram:[5,2,1,""]},"mpes.fprocessing.hdf5Processor":{getCountRate:[5,2,1,""],getElapsedTime:[5,2,1,""],loadMapping:[5,2,1,""],localBinning:[5,2,1,""],localBinning_numba:[5,2,1,""],saveHistogram:[5,2,1,""],saveParameters:[5,2,1,""],toBandStructure:[5,2,1,""],toSplitter:[5,2,1,""],updateHistogram:[5,2,1,""],viewEventHistogram:[5,2,1,""]},"mpes.fprocessing.hdf5Reader":{convert:[5,2,1,""],getAttributeNames:[5,2,1,""],getGroupNames:[5,2,1,""],name2alias:[5,2,1,""],readAttribute:[5,2,1,""],readGroup:[5,2,1,""],summarize:[5,2,1,""]},"mpes.fprocessing.hdf5Splitter":{split:[5,2,1,""],subset:[5,2,1,""],toProcessor:[5,2,1,""]},"mpes.fprocessing.parallelHDF5Processor":{combineResults:[5,2,1,""],convert:[5,2,1,""],getCountRate:[5,2,1,""],getElapsedTime:[5,2,1,""],parallelBinning:[5,2,1,""],parallelBinning_old:[5,2,1,""],saveHistogram:[5,2,1,""],saveParameters:[5,2,1,""],subset:[5,2,1,""],summarize:[5,2,1,""],updateHistogram:[5,2,1,""],viewEventHistogram:[5,2,1,""]},"mpes.utils":{appendformat:[7,3,1,""],arraybin:[7,3,1,""],bnorm:[7,3,1,""],calcax:[7,3,1,""],concat:[7,3,1,""],dictmerge:[7,3,1,""],find_nearest:[7,3,1,""],intify:[7,3,1,""],multithresh:[7,3,1,""],normspec:[7,3,1,""],numFormatConversion:[7,3,1,""],replist:[7,3,1,""],revaxis:[7,3,1,""],riffle:[7,3,1,""],shuffleaxis:[7,3,1,""],to_odd:[7,3,1,""],tqdmenv:[7,3,1,""]},"mpes.visualization":{MidpointNormalize:[8,1,1,""],bandpathplot:[8,3,1,""],cm2palette:[8,3,1,""],colormesh2d:[8,3,1,""],fit_parameter_plot:[8,3,1,""],grid_histogram:[8,3,1,""],initmpl:[8,3,1,""],moviemaker:[8,3,1,""],plot_overlay:[8,3,1,""],plot_single_hist:[8,3,1,""],sliceview3d:[8,3,1,""],stackedlineplot:[8,3,1,""],surf2d:[8,3,1,""],toggle3d:[8,3,1,""],trisurf2d:[8,3,1,""],ysplitplot:[8,3,1,""]},mpes:{analysis:[3,0,0,"-"],base:[4,0,0,"-"],fprocessing:[5,0,0,"-"],utils:[7,0,0,"-"],visualization:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"1e10":2,"3e9":5,"4th":3,"case":3,"class":[3,5,6,8],"default":[3,5,8],"export":5,"float":[3,4,5,7,8],"function":[0,2,3,4,5,6,8],"import":[1,2,3],"int":[3,4,5,7,8],"new":5,"null":5,"return":[3,4,5,7,8],"static":[2,3,4,5,6,8],"switch":[2,8],"true":[2,3,4,5,8],Axes:[3,8],For:[2,3,6],IDs:[4,5],The:[0,1,3,4,5,6,7,8],There:0,Use:[2,3],Used:4,Useful:3,Using:3,_featureupd:3,_imshow:8,a_n:3,abl:3,about:4,abov:[2,3],absolut:[3,8],accord:[3,4,5],acremann:5,action:4,activ:3,actual:[3,8],adapt:3,adc:[5,8],add:[3,5,6],added:[3,5],addfeatur:3,addit:[0,3,5,8],address:[3,4,5],adopt:3,advantag:2,affect:0,affin:3,after:[3,4,5],ahead:3,aid:6,algebra:3,algorithm:3,ali:1,alia:5,alias:[1,5],align:3,all:[3,5,8],allfil:4,allow:[2,3],along:[1,3,4,5,7,8],alpha:8,also:[1,3],amax:5,amin:5,among:3,amount:3,amp:5,amplitud:5,amplitude2:5,anal:3,analog:3,analysi:[1,6],angl:[3,5,8],angle_unit:5,angstrom:3,angular:3,ani:5,annot:[3,8],anoth:[5,7],append:[3,5,7],append_to_fold:5,appendcolumn:5,appendeaxi:5,appendformat:7,appendkaxi:5,appendmark:5,appendrow:5,appli:[3,4,5],applic:[4,5,6],apply_axi:4,apply_mask_along:3,applydeform:3,applyecorrect:5,applyfilt:5,applyjitt:5,applykcorrect:5,applywarp:3,approach:3,approxim:[3,4],arbitrai:3,area:3,arg:5,argument:[3,4,5,7,8],arot:3,around:3,arp:[5,6,8],arr:[3,7],arrai:[3,4,5,7,8],arraybin:7,arrbin:7,art:6,artefact:5,aspect:8,assembl:7,assign:3,associ:3,assum:[3,4],astropi:3,asymmetr:5,attach:[3,5],attribut:[3,4,5],attributecont:5,aug:3,augment:3,author:[3,4,5,7,8],auto:[3,8],autom:3,avail:3,avi:8,avoid:[5,7],awar:5,ax_labels:8,axes:[3,4,5,7,8],axes_name_typ:5,axesimag:8,axesobject:8,axessubplot:8,axi:[3,5,7,8],axis_ext:3,axislabels:8,axisreturn:8,axl:8,axoffset:3,axs:8,axu:8,axval:3,azimuth:8,backend:[2,3,5,8],background:[3,8],band:[3,5,6,8],bandpath_map:3,bandpathplot:8,bandstructur:5,bar:[3,5,7],base:[3,5,6,8],becaus:5,befor:[3,5,7],behav:5,being:[0,5],below:[2,3,8],best:3,between:[0,3,6,8],beyond:8,bfile:4,bgc:8,bgremov:3,bia:[3,5],bias:3,biggest:3,bilinear:8,billauer:3,bin:[3,4,5,7,8],binar:3,binari:[3,5],binax:5,bind:3,bindatafram:5,bindataframe_fast:5,bindataframe_lean:5,bindataframe_numba:5,bindict:5,binmethod:5,binned_data_nam:5,binning_kwd:5,binpartit:5,binpartition_numba:5,binrang:5,bit:7,blank:2,blob:[],block:[3,4],blocknorm:3,blockwidth:3,bnorm:7,bokeh:[3,5,8],bokoeh:8,bool:[3,4,5,7,8],bootstrap:3,bootstrapfit:3,both:[3,5],bound:[3,5,7],boundari:3,boundedarea:3,boundtyp:3,bpm:3,bresenham:3,bridg:3,brillouin:8,bsvol:3,build:4,build_dynamic_matrix:3,built:[2,4],bvec:3,calcax:7,calcgeometricdist:3,calcsymmetryscor:3,calcul:[3,5,7],calibr:[3,4],calibrate:3,calibratek:3,can:[0,1,2,3,4,5,6],candid:3,cartesian:[3,4],caus:5,cbar:8,ccent:3,ccw:3,cdeform:3,cdeform_field:[3,4],cdet:4,center:[3,4,5],center_det:3,centered:3,centroid:3,centroidnn:3,certain:[0,4,7,8],chang:[3,5,8],chem:3,choic:3,choos:[3,7,8],chosen:[3,5],circl:3,circmask:3,circular:3,classic:[3,5,7],clip:[3,8],clipbound:3,clockwis:3,close:3,closest:7,clss:4,cm2palett:8,cmap:[3,8],cmapnam:8,cmask:3,code:8,coeff:[3,4],coeffici:[3,4],col:[3,5],collect:[3,4,5,7],colnam:5,color:[3,8],colorbar:8,colormap:[3,8],colormesh2d:8,column:[3,4,5,7,8],column_index:3,columnappli:5,colval:5,com:0,combin:[3,4,5,6],combinedresult:5,combineresult:5,come:6,command:2,compat:[3,5],compil:5,complet:[5,6],complex:6,compon:[3,5],composit:[3,7],comprehens:5,compress:5,comput:5,compute_kwd:5,concat:[3,7],concaten:[3,7],condit:[3,4],conduct:8,confin:6,conflict:0,connect:3,consecut:5,consid:3,constant:[3,6],construct:[0,3,4,5],consumpt:5,contain:[1,3,4,5,8],content:[3,5],contour:8,contourf:8,control:8,convent:[1,8],convers:[3,4,5,7],convert:[3,4,5,7,8],convolut:3,coordin:[3,4,5,8],coordinatetransform:3,cooridn:3,corraxi:5,correct:[3,4,5],correctnd:4,correspond:[3,5],cost:3,count:[5,8],counterclockwis:3,countrat:5,coupl:6,cover:[3,4],crash:5,creat:5,creation:[3,5],criterion:4,crosshair:3,crosshair_thick:3,crucial:6,cscale:8,cstart:4,cstep:4,csv:5,current:[3,5],curv:[3,5,8],curvatur:3,curvature2d:3,custom:[3,5,8],cut:[3,5,8],cutaxi:5,cvd:3,d4f:3,daofind:3,daostarfind:3,dask:[0,5],data:[2,3,4,5,6,8],data_nobg:3,datafil:5,datafold:5,datafram:[3,4,5],dataframeprocessor:5,datamat:[5,8],datanorm:3,dataset:[2,3,5,8],dct:[5,8],decis:3,defin:[3,5],deform:[3,4],delet:5,deletecolumn:5,delta:3,depend:3,depth:7,deriv:3,describ:0,descript:[3,5],design:6,detail:3,detect:3,detector:[3,4,5],determin:[3,5],detrc2krc:4,detxy2kxi:4,deviat:[3,5],devic:6,dewarp:5,df_fit:3,dfcontain:3,dfield:[3,4],dfieldappli:4,dfpid:5,diagdir:3,diagon:3,diagram:3,dict:[3,5,7,8],dictionar:[3,7],dictionari:[3,5,7,8],dictmerg:7,dictnam:5,differ:[3,6,8],differenti:3,digit:3,dimens:[3,5,6,7],dimension:[3,4,5,7],direct:[3,4,5,7,8],directli:[3,6],directori:[5,8],disabl:5,discov:3,dispers:[3,8],displac:4,displai:[2,3,5,8],display_rang:3,dist:3,distanc:[3,5],distort:[3,4,5],distrbut:5,distribut:[2,5,6],distributedbin:5,dmp:4,done:1,donnel:3,doubl:3,down:8,downshift:3,draw:3,drift:[3,4,5],drop:5,dtw:3,dtyp:[3,5],dtype:5,due:[6,7],dump:4,dup:3,duplic:3,dure:[3,5],dxdydxdi:3,dyn_matrix:3,dynam:[3,6],each:[3,5,7,8],eaxi:3,ecalibdict:3,edc:[3,5],edf:[4,5],edg:[5,8],edgefactor:3,effect:6,effici:8,efil:4,either:3,elaps:5,electron:[3,4,5,6],element:[3,5,7],elev:8,emap:4,emerg:6,empti:[3,5],enabl:[2,5],end:[3,4,7,8],endpoint:3,energi:[3,4,5,6,8],energycalibr:3,energylabel:8,energytk:8,engin:8,entri:[5,7],env:7,environ:[3,5,7],equal:[3,4,8],equat:3,equiscal:3,equival:3,eref:3,error:[2,7],essenti:0,estim:3,etc:[3,5,6],evalu:3,event:5,everi:[5,7],exact:3,exampl:[3,5],exbound:3,exceed:5,except:3,exciton:6,execut:[0,7],exisitng:5,exist:[3,5,6,8],expand:3,expans:3,experi:5,experiment:[5,6],explicit:[3,5,8],explicitli:[2,5],expr:3,express:[3,4,5],extens:2,extent:3,extra:[3,5],extract:[3,4,5],extractedc:5,extrem:6,f_addr:5,f_end:4,f_start:4,f_step:4,factor:[3,4],fail:7,fals:[2,3,4,5,7,8],fashion:5,fast:5,fastdtw:3,fdir:5,featur:3,featureextract:3,femtosecond:6,feval:3,ffolder:5,fid:5,field:[3,4,5],fig:8,figsiz:[3,8],figur:[2,3,8],file:[0,3,4,6,7,8],file_id:5,file_sort:[3,4,5,8],filecollect:[4,5],fileid:4,filenam:[3,4,5,8],filepath:7,fill:[3,4],filter:[4,5],filteredattrbutenam:5,filteredfil:4,filteredgroupnam:5,find:[3,4,5,7],find_nearest:7,findcorrespond:3,first:[3,5],fit:[3,8],fit_parameter_plot:8,fitinit:3,fitkwd:3,fitparam:3,fix:3,fixed_cent:3,fixedvertex:3,flag:4,flatten:8,flight:[3,4,5],flip:[3,8],flipdir:8,float32:[3,5],fname:8,folder:[3,4,5,8],follow:[0,1,2,3,8],font:8,fontsiz:8,foreground:3,form:[3,4,5,7],format:[3,4,5,7,8],formul:3,formula:[3,4],forward:8,fpath:5,fprocess:[1,6],frame:[5,8],framecolor:8,free:5,from:[0,1,2,3,4,5,6,7,8],front:[5,7],ftype:5,full:[3,6],fulli:3,func:[3,4],func_add:3,func_upd:3,funcsum:3,further:[5,6],fwhm:3,gam2:5,gam:5,gammaa:8,gather:4,gaussian:[3,5],gener:[0,3,4,5,7,8],generatedfield:4,geometr:3,geometri:6,get:5,getattributenam:5,getcountr:5,getelapsedtim:5,getgroupnam:5,getwarpfunct:3,git:0,github:0,give:2,given:[3,5,7],glob:4,golai:5,good:3,gradient:3,gradn:3,graphic:3,grid:[3,5,8],grid_histogram:[5,8],griddata:4,group:[3,5],groupcont:5,growth:3,guess:3,gui:2,h5py:5,handl:[4,5,8],happen:[4,5],has:[3,5],have:3,hdf5:[3,4,5],hdf5processor:5,hdf5reader:5,hdf5splitter:5,hdfdict:5,header:5,height:8,hemispher:5,here:[1,2,3,6],hex:8,hfile:5,hgmat:3,high:3,highlight:3,hinder:3,hist_partit:5,histcoord:5,histdict:5,histkwd:[5,8],histogram:[5,8],histogramdd:5,histval:8,homogen:3,homographi:[3,4],horizont:[3,8],horizontal_s:8,how:[3,6],hspace:8,html:3,http:[0,3],human:5,hyper:3,ibw:5,id_1_trace_1:3,id_1_trace_2:3,id_2_trace_1:3,id_2_trace_2:3,ident:7,identifi:4,ids:[4,5],ignor:[3,5,8],igor:5,im2mat:5,imag:[0,3,4,5,6,8],image_interpol:3,imageio:5,imbot:8,imform:8,img:3,imgaw:3,imglabel:3,imgstack:3,imgwarp:3,imkwd:[3,8],immedi:2,implement:[3,4],importbinningparamet:3,improv:5,imrc2krc:4,ims:8,imsav:3,imshow:[3,8],imstack_transform:3,imtop:8,imxy2kxi:4,inbound:3,includ:[3,5,8],include_cent:3,increas:2,ind:7,independ:7,index:[3,4,5,7,8],indic:[3,4,5,8],individu:5,induc:6,inf:5,infer:[3,6],infer_oth:3,infin:5,inform:[4,5],init:3,init_notebook:[2,8],initi:[3,8],initmpl:8,inperpol:4,input:[3,4,5,7],instal:2,instanc:[3,4,5,8],instanti:4,instrum:3,insuffici:3,intact:5,integ:[3,5,7],intens:[3,5,8],intensitytransform:3,interact:[2,3,8],interest:7,interleav:7,intermedi:3,interp:3,interp_ord:3,interp_slic:3,interpol:3,interv:8,intifi:7,intnum:7,invers:[3,4],invert:7,involv:3,iopub_data_rate_limit:2,iptyp:3,ipython:2,item:[4,7],itemlist:4,iter:3,its:[0,6,7],jitter:5,jitter_amplitud:5,jitter_ax:5,jitter_bin:5,jitter_param:5,jitter_rang:5,join:3,jpart:5,jpg:5,json:5,jupyt:7,k_ab:3,k_col:3,k_colgrid:3,k_row:3,k_rowgrid:3,kane:3,kcol:3,kcoorda:3,kcoordb:3,keep:[3,4],kei:[4,5,8],kept:5,kernel:3,keytext:5,keyword:[3,4,5,7,8],kfile:4,kind:8,kinet:6,kit:0,kmap:4,known:[3,4],krow:3,kwd:[3,4,5,7,8],label:[3,5,8],landmark:3,larg:5,larger:3,laser:6,last:3,later:[3,5],latest:0,layer:8,lbs:7,lean:5,least:3,leastsq:3,leav:[4,5],left:8,legaci:5,legend:[3,5,8],legend_loc:3,legkwd:[3,5,8],length:[5,7],level:[3,7,8],liber:6,librari:5,light:6,like:[3,5,7],limit:3,limpropag:3,line:[2,3,5,8],line_gener:3,linear:[3,8],linecoord:3,linekwd:3,linesegkwd:3,linewidth:5,linwarpestim:3,list:[1,3,4,5,7,8],listfind:4,lmfit:3,lmkcenter:3,load:[0,2,3,4,5],load_addr:4,loadclassattribut:4,loadmap:5,local:[3,5],localbin:5,localbinning_numba:5,locat:[3,5],loess:7,log:8,look:[3,5,7],lookahead:3,loop:5,lorentz:5,low:3,lower:[3,5,7,8],lower_bound:5,lowerbound1:3,lowerbound2:3,lpoint:3,lstsq:3,mai:[2,3],main:[0,7,8],maincolor:3,mainfigs:8,maintitl:8,major:1,make:8,map2d:5,map:[3,4,5,8],map_coordin:3,mapcolumn:5,mapconstruct:4,mapfunc:4,mapkei:4,mapkwd:3,mappars:4,margin:8,marker:5,marker_nam:5,mask:3,mask_mean_i:3,mask_mean_x:3,masked_imag:3,maskedarr:3,master:[],mat2im:5,mat:[3,4,5],mat_compress:5,match:5,materi:6,matlab:[3,5],matplotlib:[3,5,8],matrix:[3,4,5,7,8],mattran:5,mavg_axi:3,maw:3,max_peak:3,maxim:3,maxima:3,maximum:[3,5,7,8],maxit:3,maxlist:3,mayavi:8,mead:3,mean:[3,5,7,8],measur:[3,5,6],memori:5,merg:7,mesh:[3,8],messag:3,metadata:5,metadict:5,metareadhdf5:5,method:[3,5,7,8],midpoint:[5,7,8],midpointnorm:8,midpointx:8,might:3,min_peak:3,mindist:3,miniax:8,minim:3,minima:3,minimum:[3,5,7,8],minor:0,miss:3,mix:[3,8],mlab:[2,8],mode:3,model:3,model_ev:3,modifi:3,modmask:3,modul:[3,5],momentum:[3,4,5,6,8],momentumcorrector:3,more:5,move:[3,7],movform:8,movi:8,moviemak:8,mpe:[0,1,2],mpesdataset:5,mplot3d:8,msmarker:5,much:5,multidimension:[2,3,4,5,6,7],multilevel:7,multipl:[3,7,8],multithresh:[5,7],nallfil:4,name2alia:5,name:[3,4,5,7,8],namelist:[4,5],names_to_convert:5,namespac:4,namestr:[5,8],nan:3,nanosecond:6,narrai:7,nb_backend:[2,8],nband:3,nbextens:2,nbin:5,ncol:[5,8],ncontour:8,ncore:5,ndarrai:[3,4,5,7],ndimag:3,nearest:[3,7],need:[0,3,5],neg:[3,5],neighbor:3,nelder:3,nest:[7,8],never:5,nevertheless:2,new_cent:3,newcolnam:5,newi:[4,5],newx:[4,5],next:[3,5],nfile:[3,4,5],niter:3,noend:8,nois:5,non:5,none:[3,4,5,7,8],nonequival:5,nonetyp:5,nonlinear:3,normal:[3,5,7,8],normalized_spec:7,normspec:[3,7],note:6,notebook:[3,5,7],notebookapp:2,noth:[4,7],now:4,npoint:3,nrang:3,nrow:[5,8],nside:3,nsplit:5,nth:3,ntrace:3,nullval:5,num:7,numba:5,numba_histogramdd:5,number:[3,4,5,7,8],numcolor:8,numer:[3,4,5,7,8],numformatconvers:7,numpeak:3,numpi:[0,3,4,5],numpo:8,numseq:7,numsiz:8,numtext:8,object:[3,7,8],obtain:[3,5],odd:7,oddnum:7,off:[2,8],offset:[3,4,5],old:5,oldcolnam:5,omit:3,one:[3,5,7,8],ones:3,onli:[3,4,5],onto:8,opac:8,opencv:0,oper:[3,5],optfunc:3,optim:3,optin:3,option:[3,4,5,7,8],optmethod:3,order:[3,5,6,7],orderedseq:5,ordinari:7,org:[],origin:[3,4,5,8],other:[0,3,4,5,7],otherax:5,otherwis:[0,5],out:[3,4,5],output:[2,3,5],outsid:3,over:[3,5],overflow:5,overlai:8,overrid:5,overview:6,packag:[0,1,2,7],pair:[5,7],pairwis:3,palett:8,panda:[0,3,5],parallel:[3,5,6],parallelbin:5,parallelbinning_old:5,parallelhdf5processor:[3,5],param:3,paramet:[3,4,5,7,8],parametr:3,paramfold:5,paramt:[3,5],parp:3,parquet:5,parquetprocessor:5,pars:[4,5],parse_bfil:4,parse_emap:4,parse_kei:4,parse_kmap:4,parse_map:4,parse_wmap:4,parser:[4,5],part:3,partial:[3,4,5],partial_ev:3,particular:[3,5],partit:5,pass:[3,5,8],path:[3,5,7,8],path_coord:3,pathc:3,pathcorr:3,pathmap:8,pathr:3,patrick:[3,4,5,7,8],pattern:5,pbar:[3,5],pbenv:[3,5],pcent:3,pcolormesh:[3,8],peak:3,peak_local_max:3,peakdet:3,peakdetect1d:3,peakdetect2d:3,peaksearch:3,per:3,perform:[3,5],period:3,permit:0,perspect:4,perspectivetransform:4,perspectivewarp:3,pfunc:3,phase:6,photoelectron:[3,5],photoemiss:[3,5,6],photon:6,photutil:3,physic:6,pick:3,pid:3,piecewis:5,pip:0,pipelin:3,pixel:[3,4,5,8],pkmax:3,pks:3,pkwindow:3,plai:6,plate:3,plot:[3,5,8],plot_overlai:8,plot_single_hist:8,plotax:8,plottyp:8,pmax:7,pmin:7,pmz:3,png:[2,5,8],point:[3,4,8],point_from:3,point_to:3,pointop:3,points2path:3,pointsc:3,pointsr:3,pointwis:3,poly3dcollect:8,polyc:3,polygon:3,polynomi:[3,4],polyr:3,popul:[3,4],pos:3,posit:[3,4,5,7,8],possibl:4,potenti:[0,6],pouter_ord:3,pq_append:5,pre:5,pre_t0_rang:3,prefactor:3,print:8,prioriti:5,proce:2,procedur:3,process:[3,4,6],processor:5,processs:5,proctor:3,prof:5,profil:5,progress:[3,5,7],project:4,properti:[3,4,5,6],provid:[3,5],ptw:3,pval:7,pxla:3,pxlb:3,pxp:5,pygments_styl:[],pypi:[],pyplot:3,python:5,quad:8,quantiti:3,rad:3,radial:3,radii:3,radiu:3,rai:6,ram:5,random:8,rang:[3,4,5,8],rangeconvert:3,rate:[2,5],ratio:8,rcent:3,rdeform:3,rdeform_field:[3,4],rdet:4,reach:3,reaction:6,read:[3,5],read_tabl:5,readarpestxt:5,readattribut:5,readbinnedhdf5:5,readdatafram:5,reader:5,readgroup:5,readigorbinfil:5,readimg:5,readout:5,readtsv:5,realist:5,realpolitix:0,rebin:5,recent:2,recombin:5,recommend:1,reconstruct:[3,6],record:4,rectangular:3,rectmask:3,recurs:8,redefin:3,reduc:[0,2],reduct:7,refer:[3,5],refid:3,regard:3,region:3,regionexpand:3,registr:3,regular:5,rel:[3,8],relat:3,relationship:3,remind:0,remov:[3,4],renam:5,render:[2,3,8],reorder:3,repeat:7,replac:[3,5],replist:7,repositori:0,repres:5,represent:8,request:3,requir:[0,2,3],rescolnam:5,reset:3,resetdeform:3,reshap:4,reshape2d:4,resiz:7,resolut:6,respect:3,rest:4,result:[3,5],ret:[3,4,5,7,8],retain:5,retriev:[4,5],rettyp:3,reus:5,rev:3,revarr:7,revaxi:7,reveal:6,revers:7,review:6,rgb:8,rgi:3,ridg:3,ridgedetect:3,riffarr:7,riffl:7,right:[4,8],rmsnois:3,rot2d:5,rot_sym:3,rotat:[3,5],rotsym:3,routin:[3,6],row:[3,4,5,7,8],row_index:3,rstart:4,rstep:4,run:[0,3,4],rvbin:8,rvrang:8,rvs:8,safe:7,same:[4,5,7],sampl:[3,5,6,8],save:[3,4,5,8],save_addr:[3,4,5],saveclassattribut:4,savedict:5,savehistogram:5,saveimag:3,savenam:5,saveparamet:[3,5],savgol_filt:7,savitzki:5,sbg:3,scalar:8,scale:[3,4,5,8],scan:5,scatter:3,scatterkwd:3,schedul:5,scheme:3,sci:3,scienc:6,scikit:0,scipi:[0,3,7],scope:6,score:3,screen:8,script:3,search:[3,5],sec:5,second:5,see:[3,5,6,7,8],seg:3,segment2d:3,segment:[3,5],select:[3,4,5],selector:[3,4],selectslice2d:3,selem:3,self:[3,5],separ:[0,3],seq:7,sequenc:[3,4,5,7],sequenti:3,seri:[5,6,7],serial:5,set:[2,3,5,8],setboundari:3,setup:6,sgfltr2d:5,shape:3,share:5,sharr:7,sherwood:3,shift:3,shirlei:3,shirley2d:3,should:[0,3,5],show:3,show_legend:3,shown:8,shrinkag:7,shuffl:7,shuffleaxi:7,side:3,sig:5,sig_mov:3,sig_stil:3,sigma:3,sigma_clipped_stat:3,sign:[3,5],signal:[3,7],signific:5,similar:7,simpl:5,simpli:1,simul:6,simultan:[5,7],singl:[3,5,7,8],situat:[0,3],size:[3,4,5,7,8],skimag:3,slice:[3,5,8],slicenam:5,slicerang:5,sliceview3d:8,smooth:7,solv:3,somewhat:7,sort:[4,5,8],sortednamelist:5,sortnamesbi:5,sought:5,sourc:5,source_nam:5,space:[3,8],span:[5,7],spawn:5,spec:7,special:3,specif:[3,4,5,8],specifi:[3,4,5,7,8],spectra:3,spectral:3,spectroscopi:6,spectrum:8,speicifi:5,sphinx:[],spline:3,splinewarpestim:3,split:[5,8],split_:5,split_group:5,squar:3,stack:[3,6,8],stackedlineplot:8,standard:[3,5],start:[2,3,4,6,7],start_posit:5,stat:3,state:[2,6,8],step:[2,3,4,5,7],still:5,stop:3,stop_posit:5,store:[4,5],str:[3,4,5,7,8],str_end:4,str_start:4,stream0:5,stream_0:5,string:[4,5,7,8],structur:[3,5,6],studi:6,style:8,subgrid:3,subimag:3,submit:5,submodul:[0,6],subplot:8,subset:5,substitu:[3,5],subtitl:8,subtract:5,success:4,suffici:3,suffix:3,suggest:1,sum:[3,7],sum_n:3,summar:5,summari:5,suppli:[4,8],support:[2,5],surf2d:8,surfac:[6,8],surround:3,sym:3,sym_pose_estim:3,symid:8,symlabel:8,symmetr:3,symmetri:[3,8],symscor:3,symtyp:3,synchron:5,system:[3,4,6],take:[2,5],targ:3,targcent:3,target:3,target_set_optim:3,techniqu:[3,6],term:[3,5],termin:3,terrain_r:3,text:[5,8],thei:[0,1],them:[0,3],therefor:3,thi:[0,2,3,5],thick:3,thin:3,thread:5,threshfactor:3,threshold:[3,5,7],through:[2,3,8],throughout:3,thrown:0,ths:7,tick:8,ticklabels:8,tiff:[3,5],tifffil:[3,5],time:[3,4,5,6],timestamp:5,timewarp:3,tip:5,titl:[3,8],tk_labels:8,tmat:3,to_hdf:5,to_odd:7,to_parquet:5,tobandstructur:5,todo:3,tof2evpoli:4,tof:[3,4,5],tofnam:3,toggl:3,toggle3d:[2,8],tol:3,toler:3,tomask:3,tooltip:8,top:8,toprocessor:5,tosplitt:5,total:[3,4,5],toward:3,tqdm:7,tqdmenv:7,trace:[3,5],tracenam:3,tranform:3,transform:[3,4,5],transformcolumn2d:5,transformcolumn:5,transit:6,transmat:3,trarp:6,tree:5,triangul:8,trisurf2d:8,tsv:5,tupl:[3,4,5,7,8],turn:[3,4],tutori:6,two:[3,5,8],txt:5,txtlocat:5,typ:5,type:[3,5,7,8],ubs:7,uint32:5,uint64:5,uint8:5,ultrafast:6,under:6,understand:6,uniform:3,uniformli:5,unlimit:5,updat:[3,4,5],updatedeform:3,updatehistogram:5,updatekwd:3,upgrad:0,upper:[3,5,7,8],upper_bound:5,upperbound1:3,upperbound2:3,upshift:3,usag:6,use:[0,3,5],use_alia:5,use_composite_transform:3,use_deform_field:3,used:[3,4,5,6,8],useful:5,user:[0,2,3,5],using:[1,2,3,4,5,8],usual:[5,6],util:[3,6],val:[3,7],valenc:[5,8],valu:[3,5,7,8],vardict:3,vari:3,variabl:[5,8],variou:[5,6],vector:[3,5],verbos:3,veri:5,version:[0,2,3,5],vertex:3,vertexgener:3,vertic:[3,8],vertical_s:8,via:3,view:[3,5,8],vieweventhistogram:5,vis:[1,2],visibl:3,visual:[1,2,3,5,6],vline:8,vlinekwd:8,vmax:8,vmin:8,vocod:8,voigt:3,volt:4,voltag:3,volum:[3,5],volumetr:3,wai:0,warn:[0,3],warp:[3,4,8],warp_scal:8,warpkwd:3,warpperspect:4,wave:5,wavefront:5,weight:3,well:3,wexpr:[4,5],when:[2,3,4,5,7],where:[0,3],whether:[3,5,8],which:[1,3,6,7],whl:2,whole:4,whose:3,width:[3,8],window:3,wirefram:8,wise:3,wish:0,withcoord:5,within:[3,5,6,7,8],without:[0,1,3,4,5],wmap:4,woexpr:[4,5],work:[3,4],workflow:[3,4],would:0,wrapper:5,write:5,written:3,wspace:8,www:[],x3d:[2,8],x3dom:2,x_axi:3,xarrai:[0,5],xaxi:[3,8],xdet:4,xian:[3,4,5,7,8],xlabel:8,xmargin:8,xnan:3,xrange_tran:3,xrng:3,xstart:4,xstep:4,xtran:4,xvar:3,y_axi:3,yaxi:8,ydet:4,yet:5,ylabel:8,ymargin:8,ysplit:8,ysplitplot:8,ystart:4,ystep:4,ytran:4,yve:5,zenith:8,zero:[3,5],zhang:3,zone:8},titles:["How to start","Overview of submodules","Usage notes","Analysis  <code class=\"docutils literal notranslate\"><span class=\"pre\">(mpes.analysis)</span></code>","Base classes  <code class=\"docutils literal notranslate\"><span class=\"pre\">(mpes.base)</span></code>","File I/O &amp; Processing  <code class=\"docutils literal notranslate\"><span class=\"pre\">(mpes.fprocessing)</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">mpes</span></code> documentation","Utility functions  <code class=\"docutils literal notranslate\"><span class=\"pre\">(mpes.utils)</span></code>","Visualization  <code class=\"docutils literal notranslate\"><span class=\"pre\">(mpes.visualization)</span></code>"],titleterms:{"class":4,"function":7,Using:2,analysi:3,api:6,arp:[],base:4,concept:6,depend:0,document:6,file:5,fprocess:5,how:0,instal:0,instruct:6,jupyt:2,mayavi:2,mpe:[3,4,5,6,7,8],note:2,notebook:2,overview:1,process:5,start:0,submodul:1,usag:2,util:7,visual:8}})